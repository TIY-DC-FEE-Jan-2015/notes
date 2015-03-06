/*
  So, obviously this isn't actually a real database.

  But see if you can follow along with what's going on.
*/

var u = require("underscore")

var tasks = []
var taskCounter = 0

var createTask = function(data) {
  var newTask = {
    task: data.task,
    value: data.value,
    complete: false,
    createdAt: new Date()
  }

  taskCounter++

  newTask.id = (taskCounter).toString()

  tasks.push(newTask)

  return newTask
}

exports = module.exports = {

  all: function() {
    return tasks
  },

  complete: function() {
    return u.filter(tasks, function(task){
      return (task.complete === true)
    })
  },

  incomplete: function() {
    return u.filter(tasks, function(task){
      return (task.complete === false)
    })
  },

  create: function(data) {
    return createTask(data)
  },

  find: function(id) {
    return u.find(tasks, function(task){
      return (task.id === id)
    })
  },

  close: function(id) {
    var task = u.find(tasks, function(task){
      return (task.id === id)
    })

    task.complete = true
    task.closedAt = new Date()

    return task
  },

  reopen: function(id) {
    var task = u.find(tasks, function(task){
      return (task.id === id)
    })

    task.complete = false
    task.reopenedAt = new Date()

    return task
  },

  init: function() {
    createTask({
      task: "Display all tasks on a page",
      value: 3
    })

    createTask({
      task: "Have a view that only displays completed or incompleted tasks",
      value: 5
    })

    createTask({
      task: "Have a view that only displays a specific task",
      value: 2
    })

    createTask({
      task: "Be able to finish tasks",
      value: 5
    })

    createTask({
      task: "Be able to reopen tasks",
      value: 2
    })

    createTask({
      task: "Be able to create new tasks",
      value: 7
    })

    createTask({
      task: "[Hard Mode] Have a view that provides statistics",
      value: 4
    })
  }

}