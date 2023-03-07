var barColors = ["lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey"];
var player_results = JSON.parse(sessionStorage.getItem("PlayerResutls"))
var xValues = Object.keys(player_results);

var data_set = create_data_set(player_results)
function color(color){
  if (color== "lightblue"){
    return "lightgrey"
  } else {
    return "lightblue"
  }
}

function create_data_set(info){
  data_sets = []
  color_temp = "blue"
  for (let player_dummy in info){
    for (let key in info[player_dummy]){
      if (key != "Scofre"){
        data = {}
        data_temp = []
        for (let player in info){
          data_temp.push(info[player][key])
        }
        data['label'] = key;
        data['data'] = data_temp;
        if (key == 'Score'){
          data['stack'] = 'Stack 1';
        } else {
          data['stack'] = 'Stack 0';
        }
        data_sets.push(data);
        color_temp = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        data['backgroundColor'] = color_temp;
      }
     }

    break;
  }
  return data_sets;
}
// {
//   label: 'PPG',
//   backgroundColor: barColors,
//   data: [10, 2], 
//   stack: 'Stack 0'
// },
// {
//   data: [5,3],
//   stack: 'Stack 0'
// }

new Chart("playerChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: data_set
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Scores"
    },
    scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Score'
          },
          ticks: {
            beginAtZero: true
            }
        }],
        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Players',
            }
        }]
    }
  }
  }
);

console.log("ran")