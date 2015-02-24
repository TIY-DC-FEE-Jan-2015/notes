/*
  Constructor for the team class
*/
var Team = function(name) {

  // Dynamic property: team name
  this.teamName = name;

  // Static properties: wins/losses
  this.wins = 0;
  this.losses = 0;

  // Static properties: streak and streak direction
  this.streakAmount = 0;
  this.streakResult = "";

}

/*
  This method returns win percentage

  If a team has not played any games, it returns 0
*/
Team.prototype.winPct = function() {

  if (this.wins + this.losses === 0) {
    return 0
  }

  var wPct = this.wins / (this.wins + this.losses)

  wPct = Math.round(wPct * 1000) / 1000

  return wPct
}

/*
  This method returns the compound "Streak" string
*/
Team.prototype.streak = function() {
  return this.streakResult + this.streakAmount
}

/*
  This method adds a win to the Team instance
*/
Team.prototype.addWin = function() {
  this.wins += 1

  if (this.streakResult === "W") {
    this.streakAmount += 1
  }
  else {
    this.streakResult = "W"
    this.streakAmount = 1
  }
}

/*
  This method adds a loss to the Team instance
*/
Team.prototype.addLoss = function() {
  this.losses += 1

  if (this.streakResult === "L") {
    this.streakAmount += 1
  }
  else {
    this.streakResult = "L"
    this.streakAmount = 1
  }
}
