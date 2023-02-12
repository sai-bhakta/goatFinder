submit_btn.addEventListener("click", updatePlayerList)
async function updatePlayerList(){
    var player_list = document.getElementById("players")
    var player_table = document.getElementById("player_table")
    var player_not_found = document.getElementById("player_not_found")
    var submit_btn = document.getElementById("submit_btn")
    var name = document.getElementById("form1").textContent
    console.log(name)
    var innerHTML = await getItemHtml(name);
    if (innerHTML[0]){
        var entry = document.createElement('tr');
        entry.innerHTML+=innerHTML[1];
        player_table.appendChild(entry);
        playerFound(true);
    } else {
        playerFound(false);
    }
    return
}

function playerFound(result){
    if (result){
        player_not_found.style.display = 'none';
    }else{
    player_not_found.style.display = 'inline-block';
    }
}

async function getItemHtml(name) {
    var info = await getPlayer(name)

    if (typeof info !== 'string') {
    return [true, `<td><img class='player_picture' src='${info['IMAGE']}' alt='picture of ${info["NAME"]}'></td><td>${info["NAME"]}</td><td>Description of ${info["NAME"]}</td><td>${info['TEAM']}</td>`];
    } else {
        return [false, null]
    }
}

async function getPlayer(name){
    const response = await fetch('http://localhost:5000/api', {
        headers: {
            'Player': name
        }
    })
    const data = await response.json()
    console.log(data)
    return data;
}