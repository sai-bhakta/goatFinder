
stats = {'GP': 0,
'GS': 0,
'MIN': 0,
'FGM': 0,
'FGA': 0,
'FG_PCT': 0,
'FG3M': 0,
'FG3A': 0,
'FG3_PCT': 0,
'FTM': 0,
'FTA': 0,
'FT_PCT': 0,
'OREB': 0,
'DREB': 0,
'REB': 0,
'AST': 0,
'STL': 0,
'BLK': 0,
'TOV': 0,
'PF': 0,
'PTS':0}

var slider_GP = document.getElementById("GP_S")
var value_GP = document.getElementById("GP_V")
slider_GP.oninput = function() {
    value_GP.innerHTML = slider_GP.value;
    stats["GP"] = slider_GP.value;
}
var slider_GS = document.getElementById("GS_S")
var value_GS = document.getElementById("GS_V")
slider_GS.oninput = function() {
    value_GS.innerHTML = slider_GS.value;
    stats["GS"] = slider_GS.value;
}
var slider_MIN = document.getElementById("MIN_S")
var value_MIN = document.getElementById("MIN_V")
slider_MIN.oninput = function() {
    value_MIN.innerHTML = slider_MIN.value;
    stats["MIN"] = slider_MIN.value;
}
var slider_FGM = document.getElementById("FGM_S")
var value_FGM = document.getElementById("FGM_V")
slider_FGM.oninput = function() {
    value_FGM.innerHTML = slider_FGM.value;
    stats["FGM"] = slider_FGM.value;
}
var slider_FGA = document.getElementById("FGA_S")
var value_FGA = document.getElementById("FGA_V")
slider_FGA.oninput = function() {
    value_FGA.innerHTML = slider_FGA.value;
    stats["FGA"] = slider_FGA.value;
}
var slider_FG_PCT = document.getElementById("FG_PCT_S")
var value_FG_PCT = document.getElementById("FG_PCT_V")
slider_FG_PCT.oninput = function() {
    value_FG_PCT.innerHTML = slider_FG_PCT.value;
    stats["FG_PCT"] = slider_FG_PCT.value;
}
var slider_FG3M = document.getElementById("FG3M_S")
var value_FG3M = document.getElementById("FG3M_V")
slider_FG3M.oninput = function() {
    value_FG3M.innerHTML = slider_FG3M.value;
    stats["FG3M"] = slider_FG3M.value;
}
var slider_FG3A = document.getElementById("FG3A_S")
var value_FG3A = document.getElementById("FG3A_V")
slider_FG3A.oninput = function() {
    value_FG3A.innerHTML = slider_FG3A.value;
    stats["FG3A"] = slider_FG3A.value;
}
var slider_FG3_PCT = document.getElementById("FG3_PCT_S")
var value_FG3_PCT = document.getElementById("FG3_PCT_V")
slider_FG3_PCT.oninput = function() {
    value_FG3_PCT.innerHTML = slider_FG3_PCT.value;
    stats["FG3_PCT"] = slider_FG3_PCT.value;
}
var slider_FTM = document.getElementById("FTM_S")
var value_FTM = document.getElementById("FTM_V")
slider_FTM.oninput = function() {
    value_FTM.innerHTML = slider_FTM.value;
    stats["FTM"] = slider_FTM.value;
}
var slider_FTA = document.getElementById("FTA_S")
var value_FTA = document.getElementById("FTA_V")
slider_FTA.oninput = function() {
    value_FTA.innerHTML = slider_FTA.value;
    stats["FTA"] = slider_FTA.value;
}
var slider_FT_PCT = document.getElementById("FT_PCT_S")
var value_FT_PCT = document.getElementById("FT_PCT_V")
slider_FT_PCT.oninput = function() {
    value_FT_PCT.innerHTML = slider_FT_PCT.value;
    stats["FT_PCT"] = slider_FT_PCT.value;
}
var slider_OREB = document.getElementById("OREB_S")
var value_OREB = document.getElementById("OREB_V")
slider_OREB.oninput = function() {
    value_OREB.innerHTML = slider_OREB.value;
    stats["OREB"] = slider_OREB.value;
}
var slider_DREB = document.getElementById("DREB_S")
var value_DREB = document.getElementById("DREB_V")
slider_DREB.oninput = function() {
    value_DREB.innerHTML = slider_DREB.value;
    stats["DREB"] = slider_DREB.value;
}
var slider_REB = document.getElementById("REB_S")
var value_REB = document.getElementById("REB_V")
slider_REB.oninput = function() {
    value_REB.innerHTML = slider_REB.value;
    stats["REB"] = slider_REB.value;
}
var slider_AST = document.getElementById("AST_S")
var value_AST = document.getElementById("AST_V")
slider_AST.oninput = function() {
    value_AST.innerHTML = slider_AST.value;
    stats["AST"] = slider_AST.value;
}
var slider_STL = document.getElementById("STL_S")
var value_STL = document.getElementById("STL_V")
slider_STL.oninput = function() {
    value_STL.innerHTML = slider_STL.value;
    stats["STL"] = slider_STL.value;
}
var slider_BLK = document.getElementById("BLK_S")
var value_BLK = document.getElementById("BLK_V")
slider_BLK.oninput = function() {
    value_BLK.innerHTML = slider_BLK.value;
    stats["BLK"] = slider_BLK.value;
}
var slider_TOV = document.getElementById("TOV_S")
var value_TOV = document.getElementById("TOV_V")
slider_TOV.oninput = function() {
    value_TOV.innerHTML = slider_TOV.value;
    stats["TOV"] = slider_TOV.value;
}
var slider_PF = document.getElementById("PF_S")
var value_PF = document.getElementById("PF_V")
slider_PF.oninput = function() {
    value_PF.innerHTML = slider_PF.value;
    stats["PF"] = slider_PF.value;
}
var slider_PTS = document.getElementById("PTS_S")
var value_PTS = document.getElementById("PTS_V")
slider_PTS.oninput = function() {
    value_PTS.innerHTML = slider_PTS.value;
    stats["PTS"] = slider_PTS.value;
}

var submit_btn = document.getElementById("submit_btn")
submit_btn.addEventListener("click", sendPlayersAndOptions)



async function sendPlayersAndOptions() {
    var loader = document.getElementById("loader")
    loader.style.display = "inline-block"
    var response = await fetch('http://localhost:5000/player_stats', {
        headers: {
            'Players' : sessionStorage.getItem("Players"),
            'Stats' : JSON.stringify(stats)
        }
    })
    var json_data = await response.json()
    sessionStorage.setItem("PlayerResutls", JSON.stringify(json_data["SCORES"]))
    console.log(sessionStorage.getItem("PlayerResutls"))
    window.location.replace("page3.html")
}
