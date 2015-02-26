var express = require('express');
var path = require('path');
var lessMiddleware = require("less-middleware");

var u = require("underscore")

var app = express();

app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

var randomCard = function() {
  var suits = [ "S", "H", "C", "D" ]
  var ranks = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K" ]

  var suit = u.sample(suits)
  var rank = u.sample(ranks)

  return {
    suit: suit,
    rank: rank,
    card: rank + suit
  }
}

app.get("/card", function(req, res){
  res.json(randomCard())
})

module.exports = app;
