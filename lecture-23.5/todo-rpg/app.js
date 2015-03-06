// Get the node.js extra code that lets us concatenate paths
var path = require('path');

// Get the npm package Express -- our web server 
// (and some helpful stuff to help parse POST requests)
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); 

// Get the npm package Underscore -- y'all know what this does
var u = require("underscore")


// Create a new Express application
var app = express();

// Use that "helpful stuff" to parse POST requests into request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());


// Serves up any specifically-requested static files out of the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the "index.html" file out of the public folder
app.get("/", function(req, res){
  // Use response.sendFile method to send a specific file
  res.sendFile("public/index.html")
})


// Get the "state-of-the-art task management database" we're using
var taskDB = require("./taskDB")

// Initialize the task DB with some default starter tasks
taskDB.init()


// Route to list all tasks, both completed and incomplete
app.get("/tasks", function(req, res){
  // Get all tasks from the task DB
  var tasks = taskDB.all()

  // Use response.json to respond with the data
  res.json(tasks)
})

// Route to list all *complete* tasks
app.get("/tasks/complete", function(req, res){
  // Get completed tasks from the task DB
  var tasks = taskDB.complete()

  // Use response.json to respond with the data
  res.json(tasks)
})

// Route to list all *incomplete* tasks
app.get("/tasks/incomplete", function(req, res){
  // Get incomplete tasks from the task DB
  var tasks = taskDB.incomplete()

  // Use response.json to respond with the data
  res.json(tasks)
})

// Route to list a specific task by ID
app.get("/tasks/:taskId", function(req, res){
  // Get a task from the task DB, passing in the taskId from the request route
  var task = taskDB.find(req.params.taskId)

  // Use response.json to respond with the data
  res.json(task)
})

// Route to finish a specific task, specified by ID -- note: it uses a different verb
app.post("/tasks/:taskId/close", function(req, res){
  // Complete a task in the task DB, passing in the taskId from the request route
  var task = taskDB.close(req.params.taskId)

  // Use response.json to respond with the data
  res.json(task)
})

// Route to reopen a specific task, specified by ID -- note: it uses a different verb
app.post("/tasks/:taskId/reopen", function(req, res){
  // Re-open a task in the task DB, passing in the taskId from the request route
  var task = taskDB.reopen(req.params.taskId)

  // Use response.json to respond with the data
  res.json(task)
})

// Route to add a new task -- note: it uses a different verb
app.post("/tasks", function(req, res){
  // Create a new task in the task DB, passing in the request body
  var task = taskDB.create(req.body)

  // Use response.json to respond with the task
  res.json(task)
})

// Route to return aggregated statistics
app.get("/stats", function(req, res){

  var completed = taskDB.complete()

  var points = u.reduce(completed, function(mem, task){
    return mem + task.value
  }, 0)

  var level = 0
  while((level * level) < points) {
    level++
  }

  var data = {
    experience: points,

    level: level,

    expToNextLevel: ((level + 1) * (level + 1)) - points,

    completed: completed.length,

    percentComplete: ((completed.length) / (taskDB.all().length))
  }

  res.json(data)

})

// Exports the Express application that we've added routes to.
exports = module.exports = app;
