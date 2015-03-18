var express = require('express');
var path = require('path');

var app = express();

var u = require("underscore");

var bodyParser = require('body-parser');
var multer = require('multer'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());


app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

var totalClicks = 0
var clickedBy = {}

app.get("/api/stats", function(req, res){

  var userArray = u.map(clickedBy, function(value, key){
    return {
      username: key,
      clicks: value
    }
  })

  var sortedUsers = u.sortBy(userArray, function(user){
    return user.clicks * -1;
  })

  res.json({
    total_clicks: totalClicks,
    user_clicks: sortedUsers
  })

})

app.post("/api/click", function(req, res){
  var name = req.body.name

  clickedBy[name] = clickedBy[name] || 0
  clickedBy[name]++

  totalClicks++

  res.json({ clicked: true, user_clicks: clickedBy[name], total_clicks: totalClicks })

})






module.exports = app;
