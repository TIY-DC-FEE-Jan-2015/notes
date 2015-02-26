var getRandomCard = function(callback) {

  $.ajax({
    url: "/card",
    method: "GET",
    success: function(data) {
      callback(data)
    }
  })

}

var getCardValue = function(rank) {
  switch(rank) {
    case "T":
    case "J":
    case "Q":
    case "K":
      return 10
    case "A":
      return 11
    default:
      return parseInt(rank)
  }
}

var calculateScore = function(cards) {
  // TODO

  var score = _.reduce(cards, function(memory, card){
    return memory + getCardValue(card.rank)
  }, 0)

  var aces = _.filter(cards, function(card){
    return card.rank === "A"
  })

  for (var i = 0; i < aces.length; i++) {

    if (score > 21) {
      score = score - 10
    }

  }

  return score
}

var updateUI = function() {
  $("#myCards").html("")
  $("#dealerCards").html("")

  var score = 0

  _.each(cards, function(card){
    var htmlString = templates.card(card)
    $("#myCards").append(htmlString)
  })

  _.each(dealerCards, function(card){
    var htmlString = templates.card(card)
    $("#dealerCards").append(htmlString)
  })


  $("#score").html(calculateScore(cards))

  if (calculateScore(cards) > 21) {
    $("#hit").addClass("busted")
  }
}

var cards = []
var dealerCards = []
var templates = {}

$("#hit").on("click", function(){
  if (calculateScore(cards) >= 21) {
    return
  }

  getRandomCard(function(data){
    cards.push(data)
    updateUI(cards)
  })
})

var dealersTurn = function(){

  var dealersScore = calculateScore(dealerCards)
  
  if (dealersScore < 17) {
    
    getRandomCard(function(data){
      dealerCards.push(data)
      updateUI()
      dealersTurn()
    })

  }
  else {
    var myScore = calculateScore(cards)
    var dealersScore = calculateScore(dealerCards)

    if (myScore > 21) {
      $("#score").text("You busted :(")
      return
    }
    if (dealersScore > 21) {
      $("#score").text("Dealer busted :)")
      return
    }

    if (myScore > dealersScore) {
      $("#score").text("You win!")
    }
    if (myScore < dealersScore) {
      $("#score").text("Dealer wins!")
    }
    if (myScore === dealersScore) {
      $("#score").text("Rejoice in your shared victory!")
    }
  }

}

$("#stand").on("click", dealersTurn)

var startGame = function() {
  cards = []
  dealerCards = []

  updateUI()

  $("#hit").removeClass("busted")

  getRandomCard(function(data){
    dealerCards.push(data)
    updateUI()
  })
}

$("#restart").on("click", startGame)

$(document).on("ready", function(){
  templates.card = Handlebars.compile($("#card-template").text())

  startGame()  
})