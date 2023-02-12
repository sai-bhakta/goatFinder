const fs = require("fs")
const nba=require('nba-api-client');

nba.allPlayersList({"Season":"2022-23"}).then(data => fs.writeFile('Players.json', JSON.stringify(format_data_player(data)), () => {}))
nba.leagueTeamGeneralStats({"Season":"2022-23"}).then(data => fs.writeFile('Teams.json', JSON.stringify(format_data_team(data)), () => {}))

function format_data_player(data){
    var temp = {};
    var team_dict = data["CommonAllPlayers"]
    for(var key in team_dict){
        temp[team_dict[key]["PERSON_ID"]] = team_dict[key]
    }
    return temp;
}

function format_data_team(data){
    var temp = {};
    var team_dict = data["LeagueDashTeamStats"]
    for(var key in team_dict){
        temp[team_dict[key]["TEAM_ID"]] = team_dict[key]
    }
    return temp;
}
