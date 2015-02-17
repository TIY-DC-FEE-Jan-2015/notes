var express = require('express');
var path = require('path');
var u = require("underscore");

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

app.get("/channel/:channel/messages", function(req, res){

  res.json([
    {
      channel_id: 2,
      user_id: 1,
      text: "Here is something that I said in class"
    },
    {
      channel_id: 2,
      user_id: 2,
      text: "What is that thing"
    },
    {
      channel_id: 2,
      user_id: 3,
      text: "My car can't handle snow"
    },
    {
      channel_id: 2,
      user_id: 1,
      text: "Shut up and take the Metro like a grownup"
    }
  ]);

});

app.get("/channel", function(req, res){

  res.json([
    {
      id: 1,
      name: "dc_global",
      topic: ""
    },
    {
      id: 2,
      name: "dc_jan2015_frontend",
      topic: "A JavaScript channel"
    },
    {
      id: 3,
      name: "dc_jan2015_rails",
      topic: "Some complicated stuff"
    }
  ])

});

app.get("/user", function(req, res){

  res.json([
    {
      id: 1,
      username: "kyle.hill",
      email: "kyle.hill@theironyard.com"
    },
    {
      id: 2,
      username: "autumn.richter",
      email: "whateverautumnsemailis@gmail.com"
    },
    {
      id: 3,
      username: "gregwrightbjj",
      email: "yeahicantrememberthateither@hotmai"
    }
  ])

});

module.exports = app;
