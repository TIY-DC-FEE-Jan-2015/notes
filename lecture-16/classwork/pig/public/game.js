/*
  Definition of the Game class

  Constructor takes a parameter -- number of points needed to win
*/
var Game = function(pointsToWin) {

  // Instantiate two new player instances
  this.left = new Player("lefty")
  this.right = new Player("righty")

  // Create a target property with the number of points
  // necessary to win the game
  this.target = pointsToWin

  // Create a turn property representing whose turn it is
  // If true, it's left player's turn, otherwise it's right's
  this.turn = true

}

/*
  This function returns true if either player's score is
  greater than the target for this game
*/
Game.prototype.isOver = function() {
  if (this.left.score >= this.target || this.right.score >= this.target) {
    return true
  }

  return false
}

/*
  This function returns the player instance whose turn it is
*/
Game.prototype.activePlayer = function() {
  if (this.turn) {
    return this.left
  }

  return this.right
}

/*
  This function changes the current active player
*/
Game.prototype.changePlayer = function() {
  this.turn = !this.turn
}

/*
  This function simulates the active player taking a turn

  It accepts a parameter - a string, which is the action taken
*/
Game.prototype.takeTurn = function(action) {

  // Do the action passed in by the param
  switch (action) {
    case "stop":
      
      // Execute the "stop" method for the activePlayer
      this.activePlayer().stop();
      
      // Change the turn value
      this.changePlayer()
      return

    case "roll":

      // Execute the roll method for the active player
      // Record the result of the roll
      var result = this.activePlayer().roll();
      
      // If result === 1, then change the turn value
      // Also return an object with success: false
      if (result === 1) {
        this.changePlayer()
        return {
          success: false,
          roll: result
        }
      }

      // Otherwise, return an object with success: true
      return {
        success: true,
        roll: result
      }

  }

}
