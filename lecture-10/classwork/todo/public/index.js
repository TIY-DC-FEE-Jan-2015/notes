/*
  This function takes in a string and doesn't return anything
*/
var createTaskElement = function(task) {

  // Create the parseable HTML string for this task item
  var taskHtml = "<li class='taskItem'>" + task + "</li>";

  // Creates a jQuery-wrapped version of that string
  var $taskItem = $(taskHtml);

  // Adds the jQuery-wrapped version of that string to the end of
  // the inside of the element with id="todo"
  $("#todo").append($taskItem);

  // Bind a listener to that thing we just added to the page
  $taskItem.on("click", function(evt){

    // Create a jQuery-wrapped version of the element
    // that we just clicked on
    var $currentTaskItem = $(this);

    // Add a class named "complete" to that element
    var isComplete = $currentTaskItem.hasClass("complete")

    if (isComplete) {
      $currentTaskItem.removeClass("complete");
    }
    else {
      $currentTaskItem.addClass("complete");
    }

  });
}

var getInputAndCreateTask = function() {
  // Get the value of the taskInput field
  var task = $("#taskInput").val();

  // Call the createTaskElement function with that value
  createTaskElement(task);

  // Empty the taskInput field
  $("#taskInput").val("");
}

// Bind a listener to taskButton
$("#taskButton").on("click", function(evt){
  getInputAndCreateTask();
});

// Bind a listener to taskInput keyup (aka someone typed something)
$("#taskInput").on("keyup", function(steve){

  // Check the parameter's keyCode property
  // If the keycode === 13, the user hit return
  // If so, create the new task
  if (steve.keyCode === 13) {
    getInputAndCreateTask();
  }

});

// Bind a listener to the global "page is ready event"
$(document).on("ready", function(){

  // Create a bunch of tasks that will exist as soon as the page loads
  createTaskElement("Grade assignments");
  createTaskElement("Finish Wednesday's homework");
  createTaskElement("Help Su with that secret project");

});