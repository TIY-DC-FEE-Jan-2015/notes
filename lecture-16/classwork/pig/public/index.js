var game;

var playerTemplate

$("#roll-button").on("click", function(){
  var rollResult = game.takeTurn("roll")
  updateUI()

  $("#roll-result").text(rollResult.roll)
})

$("#stop-button").on("click", function(){
  game.takeTurn("stop")
  updateUI()
})

var updateUI = function() {
  $(".player.left").html(playerTemplate(game.left))
  $(".player.right").html(playerTemplate(game.right))

  if (game.isOver() === true) {
    $(".game-container").addClass("complete")
  }

  if (game.turn === true) {
    $(".player.left .active").addClass("true")
  }
  else {
    $(".player.right .active").addClass("true")
  }
}

$(document).on("ready", function(){
  game = new Game(50);

  var playerString = $("#player-template").text()
  playerTemplate = Handlebars.compile(playerString)

  updateUI()
})