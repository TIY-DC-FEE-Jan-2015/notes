/*
  Definition for the Deck class -- built second

  Doesn't take any params in the constructor
*/
var Deck = function() {

  // Defines a cards property, which is an array of cards
  this.cards = []

  // Calls the reset method to fill the cards
  this.reset()

}

/*
  Returns the top card of the deck, removing it from the deck
*/
Deck.prototype.draw = function() {

  return this.cards.shift()

}

/*
  Rebuilds the deck with 52 brand new instances of the Card class
  Reshuffles the deck as well
*/
Deck.prototype.reset = function() {

  // Create a new array to hold cards
  var newDeck = []

  // Definition of all ranks and suits to iterate over
  var ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]
  var suits = ["spades", "diamonds", "clubs", "hearts"]

  // Iterate over ranks
  _.each(ranks, function(rank){

    // Iterate over suits
    _.each(suits, function(suit){

      // Create a new card with that rank and suit
      // Then push it into the brand new deck
      newDeck.push(new Card(rank, suit))

    })

  })

  // Shuffle the new deck and set that to the cards property of this instance
  this.cards = _.shuffle(newDeck)

}