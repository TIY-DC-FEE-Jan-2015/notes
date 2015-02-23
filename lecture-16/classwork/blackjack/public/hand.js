/*
  Definition of the Hand class
*/
var Hand = function() {

  // Create a cards property for this hand, which starts as an empty array
  this.cards = []

}

/*
  This function takes in a Deck instance as a parameter
  
  It calls the Deck's draw method and adds that card drawn
    to this Hand's cards property
*/
Hand.prototype.hit = function(deck) {

  this.cards.push(deck.draw())

}

/*
  This function returns the sum value of the hand
*/
Hand.prototype.value = function() {

  return _.reduce(this.cards, function(memory, card){

    return memory + card.value()

  }, 0);

}