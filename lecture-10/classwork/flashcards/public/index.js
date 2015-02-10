var createCard = function(front, back) {
  // Create card HTML string
  var cardHtml = "<div class='flashcard'><div class='front'>" + front + "</div><div class='back'>" + back + "</div><div class='back-overlay'></div></div>";

  // Use html string to create jQuery-wrapped div
  var $cardItem = $(cardHtml);

  // Add the jQuery-wrapped div to the page
  $("#cards").append($cardItem)

  $cardItem.on("click", function(evt){

    // NOTICE: YOU WILL DO THIS AGAIN IN LIKE AN HOUR
    $(".flashcard").removeClass("flipped");

    var $currentCard = $(this);

    //$currentCard.find(".front").toggle();
    //$currentCard.find(".back").toggle();

    // THIS PART TOO
    $currentCard.toggleClass("flipped");
  });
}

$("button").on("click", function(evt){

  var front = $("#frontInput").val();
  var back = $("#backInput").val();

  createCard(front, back);

  $(".input").val("");

})

$(document).on("ready", function(){

  createCard("Fire an event once when the page loads", "dollar sign document dot on quote ready quote")
  createCard("First parameter of a jQuery listener contains", "a jQuery-wrapped event");
  createCard("The thing you interacted with in a jQuery listener is represented by", "this")
  createCard("How do you vertically center anything", "top: 50%; position: relative; transform: translateY(50%);")

});