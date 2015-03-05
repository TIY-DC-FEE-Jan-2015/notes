var express = require('express');
var path = require('path');

var forecastDotIoDataGetter = require('request')

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

var apiKey = "7de15dadd519a8199d5ff6e284c6babc"

app.get("/data", function(req, res){
  var latitude = req.query.latitude
  var longitude = req.query.longitude

  forecastDotIoDataGetter({
    url: "https://api.forecast.io/forecast/" + apiKey + "/" + latitude + "," + longitude,
    json: true
  }, function(err, response, data){
    res.json(data)
  })
})

module.exports = app;
