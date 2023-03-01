var barColors = ["lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey","lightblue", "lightgrey"];
var player_results = JSON.parse(sessionStorage.getItem("PlayerResutls"))
var xValues = Object.keys(player_results);
var yValues = Object.keys(player_results).map(function(key){
    return player_results[key];
});

new Chart("playerChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
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