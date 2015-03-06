var templates = {};
var tasks;

var getTemplates = function() {
  templates = {
    task: Handlebars.compile( $("#task-template").text() )
  }
}

var createViews = function() {
  tasks.each(function(task){

    var view = new TaskView(task)
    $("#task-list").append(view.$el)

  })
}

$("#all-tasks").on("click", function(){
  $("body").removeClass("complete")
  $("body").removeClass("incomplete")
})

$("#complete-tasks").on("click", function(){
  $("body").addClass("complete")
  $("body").removeClass("incomplete")
})

$("#incomplete-tasks").on("click", function(){
  $("body").removeClass("complete")
  $("body").addClass("incomplete")
})

$("#add-new-task").on("click", function(){
  var data = {
    task: $("#new-task-description").val(),
    value: $("#new-task-value").val()
  }

  tasks.create(data, {
    success: function(newModel) {
      var view = new TaskView(newModel)
      $("#task-list").append(view.$el)
    }
  })
})

$(document).on("ready", function(){

  getTemplates()

  tasks = new TaskCollection()

  tasks.fetch({
    success: createViews
  })

})