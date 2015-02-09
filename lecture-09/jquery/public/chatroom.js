var addMessage = function(username, message) {
  var messageToAdd = "<div class='chatMessage'>" + username + ": " + message + "</div>"
  $("#chatWindow").append(messageToAdd);
};

$("#messageSubmit").on("click", function(){
  

  addMessage($("#username").val(), $("#message").val())

  $("#message").val("")
})