var league = new League()
var template = {}

var updateTable = function() {

  $("#standings").html("")
  $(".team").html("")

  $("#standings").append(template.header())

  _.each(league.sortedTeams(), function(team){

    $("#standings").append(template.row(team))

    $(".team").append(template.dropdown(team))

  })

}

$("#inputButton").on("click", function(){

  var winnerName = $("#winner").val()
  var loserName = $("#loser").val()

  if (winnerName === loserName) {
    return
  }

  league.result(winnerName, loserName)

  updateTable()

})

$(document).on("ready", function(){

  league.addTeam("DC")
  league.addTeam("Miami")
  league.addTeam("New York")
  league.addTeam("Atlanta")
  league.addTeam("Philly")

  var templateString = $("#row-template").text()
  template.row = Handlebars.compile(templateString)

  var templateString = $("#header-template").text()
  template.header = Handlebars.compile(templateString)
  
  var templateString = $("#dropdown-template").text()
  template.dropdown = Handlebars.compile(templateString)
  
  updateTable()

})