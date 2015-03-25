var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

app.get("/api/test", function(req, res){

  res.json({
    bikeData: [
      { stationName: "20th and Crystal Drive", bikes: 6, docks: 3 },
      { stationName: "23rd and Bell Street", bikes: 9, docks: 8 }
    ],
    railData: [
      { stationName: "Crystal City", trains: [
        { minutes: 4, line: "BL" },
        { minutes: 7, line: "YL" }
      ]}
    ],
    busData: [
    ]
  })

})

module.exports = app;
