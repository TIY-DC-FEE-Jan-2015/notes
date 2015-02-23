/*
  Definition of the Player class

  Takes in a parameter, which is the player's name
*/
var Player = function(name) {

  // Sets the name property of the player
  this.name = name

  // Permanent score
  this.score = 0

  // Temporary score -- gets added to permanent score
  // if you choose to stop before rolling a 1
  this.turnScore = 0

  // Instantiate a die for each player
  this.die = new Dice()

}

/*
  This function simulates a die roll
  If the die roll is a 1, sets the turnScore to 0 and returns false
  Otherwise, adds the result to the turnSture and returns true
*/
Player.prototype.roll = function(){

  // Simulate die roll
  var result = this.die.roll()

  // If the roll is a 1
  if (result === 1) {
    // Set turnScore to 0
    this.turnScore = 0
    // Return 1
    return 1
  }

  // Adds the roll to this turnScore
  this.turnScore = result + this.turnScore

  // Return true (aka it's still this player's turn)
  return result
}

/*
  This function banks points from this turn
*/
Player.prototype.stop = function() {
  // Adds turnScore to this player's permanent score
  this.score = this.score + this.turnScore

  // Sets turnScore to 0
  this.turnScore = 0;
}