var express = require('express');
var path = require('path');
var u = require("underscore")

var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

app.get("/student/:studentId", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

/* ***** */

var students = {}
var studentCounter = 1

var createstudent = function(content) {
  var newstudent = u.extend({}, content, { id: studentCounter})

  students[studentCounter] = newstudent
  studentCounter++

  return newstudent
}

app.get("/api/student", function(req, res){
  res.json(u.values(students))
})

app.get("/api/student/:student", function(req, res){
  if (students[req.params.student]) {
    res.json(students[req.params.student])
    return
  }
  res.sendStatus(404)
})

app.post("/api/student", function(req, res){
  res.json(createstudent(req.body))
})

app.put("/api/student/:student", function(req, res){
  if (students[req.params.student]) {
    students[req.params.student] = u.extend({}, students[req.params.student], req.body)
    res.json(students[req.params.student])
    return
  }
  res.sendStatus(404)
})

app.delete("/api/student/:student", function(req, res){
  if (students[req.params.student]) {
    var student = students[req.params.student]
    delete students[req.params.student]
    res.json(student)
    return
  }
  res.sendStatus(404)
})

module.exports = app;
