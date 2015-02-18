var express = require('express');
var path = require('path');
var u = require("underscore")

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

app.get("/favorite", function(req, res){

  var listOfStationCodes = ["A03", "A02", "A01", "D08", "A07", "A06", "A05", "A04", "C10", "E10", "C12", "B08", "B09", "D09", "D06", "D07", "D04", "D05", "D02", "D03", "B01", "B02", "B03", "B04", "B05", "B06", "B07", "D12", "C13", "K02", "D10", "E09", "C15", "K04", "G05", "G04", "K01", "G01", "F11", "G03", "G02", "K07", "K06", "D11", "K08", "A13", "A12", "A11", "A10", "A15", "A14", "N04", "N06", "N01", "N02", "N03", "B35", "E02", "C09", "C08", "E08", "E07", "E06", "E05", "E04", "E03", "C01", "E01", "C03", "C02", "C05", "D01", "C07", "C06", "C04", "K03", "J03", "D13", "B11", "K05", "F08", "F09", "C14", "F04", "F05", "F06", "F07", "J02", "F01", "F02", "F03", "B10", "F10", "A09", "A08"];

  res.json({
    favorite: u.sample(listOfStationCodes)
  })

});

module.exports = app;
