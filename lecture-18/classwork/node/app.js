var express = require('express');
var path = require('path');

var u = require("underscore")

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

var getFavoriteNumbers = require("./code/favorite-number.js")

app.get("/kyles-favorite-number", function(req, res){

  var randomNumberArray = getFavoriteNumbers.getRandomNumbers(1)

  res.json(randomNumberArray[0])

})

app.get("/kyles/favorite/numbers/:amount", getFavoriteNumbers.express)

app.get("/kyles/favorite/numbers", getFavoriteNumbers.express)

app.get("/google", function(req, res){

  res.redirect("http://www.google.com")

})

module.exports = app;
