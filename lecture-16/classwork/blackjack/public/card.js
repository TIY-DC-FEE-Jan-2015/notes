/*
  Definition for the Card class - built first because granular

  Constructor takes in rank and suit
*/
var Card = function(r, s) {

  // Attaches rank and suit to instance
  this.rank = r;
  this.suit = s;

}

/*
  Method that returns the value of the card
  Takes in an optional parameter to force Aces to 1 if hand is "hard"
*/
Card.prototype.value = function(hard) {

  // Checks if this is an Ace, and if this hand is "hard"
  // If so, just return 1
  if (hard === true && this.isAce() === true) {
    return 1
  }

  return valueOfCard(this.rank)
}

/*
  Return true if this is an ace, otherwise false
*/
Card.prototype.isAce = function() {
  return (this.rank === "Ace")
}

/*
  Function that returns the value of the card passed in as param
*/
var valueOfCard = function(cardRank) {
  
  // Switch statement for card rank
  switch (cardRank) {
    case "Ace":
      // If this is an Ace, return 11
      return 11
    case "King":
    case "Queen":
    case "Jack":
      // If this is a K/Q/J, return 10
      return 10
    default:
      // Non-face cards return their value
      return cardRank
  }

}
