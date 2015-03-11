var express = require('express');
var path = require('path');

var u = require("underscore")

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

var teams = {}

var createTeam = function(teamName) {
  teams[teamName] = {
    wins: 0,
    losses: 0,
    name: teamName,

    vs: {
      wins: {},
      losses: {}
    },

    display: function() {
      return this.name + ": " + this.wins + "-" + this.losses
    }
  }
}

var result = function(winnerTeam, loserTeam) {
  winnerTeam.wins++
  loserTeam.losses++

  winnerTeam.vs.wins[loserTeam.name] = 1
  loserTeam.vs.losses[winnerTeam.name] = 1
}

createTeam("Kyle")
createTeam("James")
createTeam("Su")
createTeam("Katherine")

app.get("/api/standings", function(req, res){

  res.json({
    teams: u.values(teams)
  })

})

app.get("/api/team/:teamName", function(req, res){

  res.json(teams[req.params.teamName])

})

app.get("/api/result/:winnerName/:loserName", function(req, res){

  var winnerTeam = teams[req.params.winnerName]
  var loserTeam = teams[req.params.loserName]

  result(winnerTeam, loserTeam)

  res.json({ ok: "sure" })

})

module.exports = app;
