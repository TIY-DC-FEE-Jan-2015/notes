var express = require('express');
var path = require('path');

var app = express();

var u = require("underscore")

// Be able to parse the body of a PUT/POST request
// I don't know what this shit does either
var bodyParser = require('body-parser');
var multer = require('multer'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

// Serve up static assets
app.use(express.static(path.join(__dirname, 'public')));

// Redirect the user to public/test.html
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})


var beers = {}
var idCounter = 1

app.get("/beers", function(request, response){
  response.json(u.values(beers))
})

app.get("/beers/:id", function(request, response){
  response.json(beers[request.param("id")])
})

app.post("/beers", function(request, response){
  var beerData = request.body

  beerData.id = idCounter
  beers[idCounter] = beerData
  idCounter++

  response.json(beerData)
})

app.put("/beers/:id", function(request, response){
  var beerData = request.body
  var id = request.param("id")

  beers[id] = u.extend({}, beers[id], beerData)

  response.json(beers[id])
})

app.delete("/beers/:id", function(request, response){
  var id = request.param("id")
  var beerData = beers[id]

  delete beers[id]

  response.json(beers[id])
})

module.exports = app;
