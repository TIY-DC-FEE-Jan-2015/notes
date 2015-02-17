var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var u = require("underscore");

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

// Look, it's the worst database
var users = [];
var userCounter = 0;

app.post("/user", function(req, res){
  if (req.body && req.body.username) {
    userCounter++;

    var user = {
      id: userCounter,
      username: req.body.username
    };

    users.push(user)

    res.json(200, user);
    return
  }

  res.json(403, {
    error: true,
    message: "missing username parameter"
  })
});

app.get("/user", function(req, res){
  res.json(200, users)
});

app.get("/user/:user", function(req, res){

  var user = u.find(users, function(i){
    return i.id === parseInt(req.params.user);
  })

  if (user) {
    res.json(200, user);
    return
  }

  res.json(404, {
    error: true,
    message: "user id not found"
  })
});

module.exports = app;
