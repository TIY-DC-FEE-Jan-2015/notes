/*
  Constructor for the league class
*/

var League = function() {

  // Property containing teams in this league
  this.teams = []

}

/*
  Method to return sorted list of teams by winPct
*/
League.prototype.sortedTeams = function() {
  var listOfSortedTeams = _.sortBy(this.teams, function(team){
    return team.winPct() * -1
  })

  return listOfSortedTeams
}

/*
  Method to add new teams to this league
*/
League.prototype.addTeam = function(teamName) {
  this.teams.push(new Team(teamName))
}

/*
  Method to retrieve a Team instance via name
*/
League.prototype.findTeam = function(teamName) {
  return _.find(this.teams, function(team){
    return team.teamName === teamName
  })
}

/*
  Method to add a result to teams
*/
League.prototype.result = function(winnerName, loserName) {
  var winnerTeam = this.findTeam(winnerName)
  var loserTeam = this.findTeam(loserName)

  if (winnerTeam === loserTeam) {
    throw new Error("Winner team and loser team are identical")
  }

  winnerTeam.addWin()
  loserTeam.addLoss()
}


