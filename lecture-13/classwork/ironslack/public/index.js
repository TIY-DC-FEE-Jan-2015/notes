var getMessages = function() {

  $.ajax({
    url: "/channel/dc_jan2015_frontend/messages",
    method: "GET",
    success: function(listOfMessages) {

      _.each(listOfMessages, function(message){

        var user = _.find(userList, function(user){
          return user.id === message.user_id;
        })

        message.user = user

        var htmlString = "<div class='message'><div class='author'>" + message.user.username +  "</div><div class='text'>" + message.text + "</div></div>";
        $("#message-list").append(htmlString)

      })
    }
  })

}

var getChannelMessages = function(channelId) {

  $.ajax({
    url: "/channel/" + channelId + "/messages",
    method: "GET",
    success: function(listOfMessages) {

      //$("#message-list").html("")

      _.each(listOfMessages, function(message){

        var user = _.find(userList, function(user){
          return user.id === message.user_id;
        })

        message.user = user

        var htmlString = "<div class='message'><div class='author'>" + message.user.username +  "</div><div class='text'>" + message.text + "</div></div>";
        $("#message-list").append(htmlString)

      })
    }
  })

}

var getChannels = function() {


  $.ajax({
    url: "/channel",
    method: "GET",
    success: function(listOfChannels) {
      _.each(listOfChannels, function(channel){
        var htmlString = "<div class='channel' data-channel-id='" + channel.id + "'>" + channel.name + "</div>";

        var $channelHtml = $(htmlString)

        $("#channel-list").append($channelHtml);

        $channelHtml.on("click", function(){

          getChannelMessages($(this).attr("data-channel-id"))

        })
      })
    }
  })
}

var getUsers = function() {

  $.ajax({
    url: "/user",
    method: "GET",
    success: function(listOfUsers) {

      userList = listOfUsers;
      
      _.each(listOfUsers, function(user){
        var htmlString = "<div class='username'>" + user.username + "</div>";

        $("#user-list").append(htmlString);
      })

    }
  })

}

var userList;

$(document).on("ready", function(){

  getChannels();
  getUsers();
  getMessages();

})