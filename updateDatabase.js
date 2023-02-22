const players = require("./Players.json")
const fs = require("fs")
const nba=require('nba-api-client');
const { stringify } = require("querystring");
const { json } = require("express");

// nba.allPlayersList({"Season":"2022-23"}).then(data => fs.writeFile('Players.json', JSON.stringify(format_data_player(data)), () => {}))
// nba.leagueTeamGeneralStats({"Season":"2022-23"}).then(data => fs.writeFile('Teams.json', JSON.stringify(format_data_team(data)), () => {}))

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

async function reset_players_list() {
    console.log("Starting")
    return_dict = {}
    for (let player in players){
        console.log(player)
        var response = await nba.playerCareerStats({"PlayerID":player, "PerMode":"Totals"})
        var pts = response["CareerTotalsRegularSeason"]["PTS"]
        var name = players[player]["DISPLAY_FIRST_LAST"]
        return_dict[name] = pts;
        temp_dict = {}
        temp_dict[player] = {"name":name, "pts":pts}
        console.log(`Writing ${name}:${pts}`)
        fs.appendFile('PlayersList.json', JSON.stringify(temp_dict) , ()=>{})
    }
    
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

async function playerInfo(player_id){
    console.log("Fetching" + stringify(player_id))
    var response = await fetch(`https://stats.nba.com/stats/commonplayerinfo?PlayerID=${player_id}&`)
    console.log(response.status)
    return response
}

//reset_players_list()

function create_name_score(){
    let rawdata = fs.readFileSync('PlayersList.json');
    let players_dict = JSON.parse(rawdata);
    var new_dict = {}
    for (let key in players_dict){
        if (players_dict[key]["pts"]){
            if (new_dict[players_dict[key]["name"]]){
                if (players_dict[key]["pts"] > new_dict[players_dict[key]["name"]]){
                    new_dict[players_dict[key]["name"]] = players_dict[key]["pts"];
                }
            } else {
                new_dict[players_dict[key]["name"]] = players_dict[key]["pts"];
            }  
        }
    }
    var items = Object.keys(new_dict).map(
        (key) => { return [key, new_dict[key]] });
        items.sort(
        (first, second) => { return first[1] - second[1] }
    );
    
    var list_scores = items.map(
        (e) => { return e[0] });
    reversed = list_scores.reverse();
    fs.writeFile('PlayerScoreName.json', JSON.stringify(reversed) , ()=>{})
}

create_name_score();