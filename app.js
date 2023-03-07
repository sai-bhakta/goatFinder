//Imports
const express=require("express")
const cors = require('cors')
const nba=require('nba-api-client');
const app=express();
const players = require('./node_modules/nba-api-client/data/players.json');
const { response } = require("express");
const res = require("express/lib/response");
const max_stats = {'GP': 1611,
                    'GS': 1471.0,
                    'MIN': 57446.0,
                    'FGM': 15837.0,
                    'FGA': 28307.0,
                    'FG_PCT': 1.0,
                    'FG3M': 3302.0,
                    'FG3A': 7681.0,
                    'FG3_PCT': 1.0,
                    'FTM': 9787.0,
                    'FTA': 13188.0,
                    'FT_PCT': 1.0,
                    'OREB': 6731.0,
                    'DREB': 11453.0,
                    'REB': 23924.0,
                    'AST': 15806.0,
                    'STL': 3265.0,
                    'BLK': 3830.0,
                    'TOV': 4935.0,
                    'PF': 4657.0,
                    'PTS':40000.0}

// Setup
app.use(cors()) 


// Handling get request
app.get("/api",(req,res,next)=>{
  // Get Player Name From Headers
  var player = req.headers['player']

  // Get Player Dict from Name
  var player_obj = getPlayerID(player)
  
  //Check if player was found
  if (player_obj !== undefined) {
    sendResponse(player_obj, res)
  } else {
    res.end(JSON.stringify("Player Not Found"))
    console.log("Couldnt find player")
  }
  })

  app.get("/player_stats", (req, res, next) => {
    console.log("Calculating...")
    sendScoreResponse(req, res);
  })
 
app.listen(5000,()=>{
    console.log("Server is Running");
})


async function sendResponse(player_obj, res) {
  // Get Player ID from Player Dict
  var id = player_obj['PlayerID']
    
  // Create Json Body to Return
  var return_json = {}

  // Get Information about Player
  const [name, jersey, position, team_id, team_name, pts, ast, reb] = await getPlayerInformationFromId(id)

  // Set Parameters
  return_json['ID'] = id
  return_json['IMAGE'] = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`
  return_json['NAME'] = name;
  if (jersey)
    return_json['JERSEY'] = jersey;
  else
  return_json['JERSEY'] = 'N/A';
  if (position)
    return_json['POSITION'] = position;
  else
    return_json['POSITION'] = "N/A";
  if (position)
    return_json['TEAM_ID'] = team_id;
  else
    return_json['TEAM_ID'] = "N/A";
  if (team_name)
    return_json['TEAM_NAME'] = team_name;
  else
  return_json['TEAM_NAME'] = "N/A";
  if (pts)
    return_json['PTS'] = pts;
  else
    return_json['PTS'] = 'N/A';
  if (ast)
    return_json['AST'] = ast;
  else
    return_json['AST'] = 'N/A'
  if (reb)
    return_json['REB'] = reb;
  else
    return_json['REB'] = "N/A";

  res.status(200).end(JSON.stringify(return_json))
  console.log("Sent Information")
  console.log(JSON.stringify(return_json))

}

async function getPlayerInformationFromId(id){
  let response = await nba.playerInfo({"PlayerID":id})
  return_info = {}
  player_info = response["CommonPlayerInfo"]
  headline_stats = response["PlayerHeadlineStats"]
  return [
    player_info["DISPLAY_FIRST_LAST"],
    player_info["JERSEY"],
    player_info["POSITION"],
    player_info["TEAM_ID"],
    player_info["TEAM_NAME"],
    headline_stats["PTS"],
    headline_stats["AST"],
    headline_stats["REB"]
  ]
}

function getPlayerID(name_of_player) {
  for (let name in players){
    if (name_of_player.toLowerCase() === name.toLowerCase()) {
      return players[name]
    }
  }
}

async function sendScoreResponse(req, res){
  var players = JSON.parse(req.get("Players"));
  var preferences = JSON.parse(req.get("Stats"));
  var scores = await calculate_player_scores(players, preferences);
  console.log(typeof scores)
  console.log(JSON.stringify(scores))
  res.status(200).end(JSON.stringify({'SCORES':scores}))
}

async function calculate_player_scores(players, preferences){
  var scores = {};
  for (let i = 0; i < players.length; i++){
    console.log(players[i])
    scores[players[i]] = await calculate_player_score(players[i], preferences);
  }
  return scores;
}

async function calculate_player_score(player, preferences){
  var id = getPlayerID(player)
  let response = await nba.playerCareerStats({"PlayerID":id['PlayerID'], "PerMode":"Totals"})
  player_info = response["CareerTotalsRegularSeason"];
  var score = 0.0;
  return_dict = {};
  for (let key in preferences){
    score_key = (player_info[key]/max_stats[key]) * (preferences[key] * 0.01)
    score += score_key;
    return_dict[key] = score_key;
  }
  return_dict['Score'] = score;
  return return_dict;
}

