var canvas = document.getElementById("canvasElement");
var ctx = canvas.getContext("2d");

var myBarChart = new Chart(ctx).Bar({
  labels: [ "A", "B", "C", "D", "E", "F" ],
  datasets: [
    {
      label: "Test Values",
      data: [ 50, 10, 20, 90, 70, 60 ],
      fillColor: "white",
      strokeColor: "teal"
    }
  ]
});

canvas.onclick = function(evt) {
  console.log(myBarChart.getBarsAtEvent(evt)[0].value)
}


var lineGraph = document.getElementById("lineGraph")
var lineCtx = lineGraph.getContext("2d")

var myLineChart = new Chart(lineCtx).Line({
  labels: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
  datasets: [
    {
      label: "First Thing",
      strokeColor: "red",
      fillColor: "transparent",
      lineWidth: 5,
      data: [ 50, 30, 20, 70, 15, 60, -5 ]
    },
    {
      label: "Second Thing",
      fillColor: "transparent",
      strokeColor: "blue",
      data: [ 40, 80, 20, 40, 30, 20, 90]
    }
  ]
})