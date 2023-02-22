//Imports
const express=require("express")
const cors = require('cors')
const nba=require('nba-api-client');
const app=express();
const players = require('./node_modules/nba-api-client/data/players.json');

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
    console.log(req)
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
  var response = await nba.playerInfo({"PlayerID":id})
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