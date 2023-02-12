//Imports
const express=require("express")
const cors = require('cors')
const nba=require('nba-api-client');
const app=express();
const players = require('./Players.json')
const teams = require('./Teams.json')

// Setup
app.use(cors())


// Handling get request
app.get("/api",(req,res,next)=>{
  // Get Player Name From Headers
  var player = req.headers['player']

  // Get Player Dict from Name
  var player_obj = nba.getPlayerID(player)
  
  //Check if player was found
  if (player_obj !== undefined) {
    sendResponse(player_obj, res)
  } else {
    res.end(JSON.stringify("Player Not Found"))
    console.log("Couldnt find player")
  }
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
  return_json['JERSEY'] = jersey;
  return_json['POSITION'] = position;
  return_json['TEAM_ID'] = team_id;
  return_json['TEAM_NAME'] = team_name;
  return_json['PTS'] = pts;
  return_json['AST'] = ast;
  return_json['REB'] = reb;

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

function searchByKey(map, route) {
  return map[route] ? map[route] : 'not found' //return 'not found' when an invalid key is given
}


