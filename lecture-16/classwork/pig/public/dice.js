
/*
  Definition of the Dice class
*/
var Dice = function() {

}

/*
  Return a random integer from 1 to 6.
*/
Dice.prototype.roll = function() {
  return Math.ceil(Math.random() * 6)
}