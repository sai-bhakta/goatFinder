stuff = {'GP': 0,
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
    stuff["GP"] = slider_GP.value;
}
var slider_GS = document.getElementById("GS_S")
var value_GS = document.getElementById("GS_V")
slider_GS.oninput = function() {
    value_GS.innerHTML = slider_GS.value;
    stuff["GS"] = slider_GS.value;
}
var slider_MIN = document.getElementById("MIN_S")
var value_MIN = document.getElementById("MIN_V")
slider_MIN.oninput = function() {
    value_MIN.innerHTML = slider_MIN.value;
    stuff["MIN"] = slider_MIN.value;
}
var slider_FGM = document.getElementById("FGM_S")
var value_FGM = document.getElementById("FGM_V")
slider_FGM.oninput = function() {
    value_FGM.innerHTML = slider_FGM.value;
    stuff["FGM"] = slider_FGM.value;
}
var slider_FGA = document.getElementById("FGA_S")
var value_FGA = document.getElementById("FGA_V")
slider_FGA.oninput = function() {
    value_FGA.innerHTML = slider_FGA.value;
    stuff["FGA"] = slider_FGA.value;
}
var slider_FG_PCT = document.getElementById("FG_PCT_S")
var value_FG_PCT = document.getElementById("FG_PCT_V")
slider_FG_PCT.oninput = function() {
    value_FG_PCT.innerHTML = slider_FG_PCT.value;
    stuff["FG_PCT"] = slider_FG_PCT.value;
}
var slider_FG3M = document.getElementById("FG3M_S")
var value_FG3M = document.getElementById("FG3M_V")
slider_FG3M.oninput = function() {
    value_FG3M.innerHTML = slider_FG3M.value;
    stuff["FG3M"] = slider_FG3M.value;
}
var slider_FG3A = document.getElementById("FG3A_S")
var value_FG3A = document.getElementById("FG3A_V")
slider_FG3A.oninput = function() {
    value_FG3A.innerHTML = slider_FG3A.value;
    stuff["FG3A"] = slider_FG3A.value;
}
var slider_FG3_PCT = document.getElementById("FG3_PCT_S")
var value_FG3_PCT = document.getElementById("FG3_PCT_V")
slider_FG3_PCT.oninput = function() {
    value_FG3_PCT.innerHTML = slider_FG3_PCT.value;
    stuff["FG3_PCT"] = slider_FG3_PCT.value;
}
var slider_FTM = document.getElementById("FTM_S")
var value_FTM = document.getElementById("FTM_V")
slider_FTM.oninput = function() {
    value_FTM.innerHTML = slider_FTM.value;
    stuff["FTM"] = slider_FTM.value;
}
var slider_FTA = document.getElementById("FTA_S")
var value_FTA = document.getElementById("FTA_V")
slider_FTA.oninput = function() {
    value_FTA.innerHTML = slider_FTA.value;
    stuff["FTA"] = slider_FTA.value;
}
var slider_FT_PCT = document.getElementById("FT_PCT_S")
var value_FT_PCT = document.getElementById("FT_PCT_V")
slider_FT_PCT.oninput = function() {
    value_FT_PCT.innerHTML = slider_FT_PCT.value;
    stuff["FT_PCT"] = slider_FT_PCT.value;
}
var slider_OREB = document.getElementById("OREB_S")
var value_OREB = document.getElementById("OREB_V")
slider_OREB.oninput = function() {
    value_OREB.innerHTML = slider_OREB.value;
    stuff["OREB"] = slider_OREB.value;
}
var slider_DREB = document.getElementById("DREB_S")
var value_DREB = document.getElementById("DREB_V")
slider_DREB.oninput = function() {
    value_DREB.innerHTML = slider_DREB.value;
    stuff["DREB"] = slider_DREB.value;
}
var slider_REB = document.getElementById("REB_S")
var value_REB = document.getElementById("REB_V")
slider_REB.oninput = function() {
    value_REB.innerHTML = slider_REB.value;
    stuff["REB"] = slider_REB.value;
}
var slider_AST = document.getElementById("AST_S")
var value_AST = document.getElementById("AST_V")
slider_AST.oninput = function() {
    value_AST.innerHTML = slider_AST.value;
    stuff["AST"] = slider_AST.value;
}
var slider_STL = document.getElementById("STL_S")
var value_STL = document.getElementById("STL_V")
slider_STL.oninput = function() {
    value_STL.innerHTML = slider_STL.value;
    stuff["STL"] = slider_STL.value;
}
var slider_BLK = document.getElementById("BLK_S")
var value_BLK = document.getElementById("BLK_V")
slider_BLK.oninput = function() {
    value_BLK.innerHTML = slider_BLK.value;
    stuff["BLK"] = slider_BLK.value;
}
var slider_TOV = document.getElementById("TOV_S")
var value_TOV = document.getElementById("TOV_V")
slider_TOV.oninput = function() {
    value_TOV.innerHTML = slider_TOV.value;
    stuff["TOV"] = slider_TOV.value;
}
var slider_PF = document.getElementById("PF_S")
var value_PF = document.getElementById("PF_V")
slider_PF.oninput = function() {
    value_PF.innerHTML = slider_PF.value;
    stuff["PF"] = slider_PF.value;
}
var slider_PTS = document.getElementById("PTS_S")
var value_PTS = document.getElementById("PTS_V")
slider_PTS.oninput = function() {
    value_PTS.innerHTML = slider_PTS.value;
    stuff["PTS"] = slider_PTS.value;
}

var submit_btn = document.getElementById("submit_btn")
submit_btn.addEventListener("click", submit_entries)


async function sendPlayersAndOptions() {
    const response = await fetch('http://localhost:5000/player_stats', {
        headers: {
            'Players' : players,
            
        }
    })
}