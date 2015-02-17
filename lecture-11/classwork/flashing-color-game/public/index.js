/*
  This function creates and returns a random RGB color
*/
var randomColor = function() {
  // Get random value between 0-255 for each of R, G, and B
  var red = Math.round(Math.random() * 255)
  var blue = Math.round(Math.random() * 255)
  var green = Math.round(Math.random() * 255)

  // Concatenate these values into an rgb(x, y, z) format string
  var color = "rgb(" + red + ", " + blue + ", " + green + ")";
  return color
}


/*
  Variables to programmatically determine where the square is in relation to the screen
*/
var leftPercentage = 20;
var topPercentage = 20;

/*
  This function determines the current position of the square
  It creates a jQuery-friendly object to that contains a top and left property
  Those properties are moved between 1-2% in either direction


  It returns that object
*/
var randomMovement = function() {
  var percentDelta = 10;

  var leftDelta = (Math.random() * percentDelta) - (percentDelta / 2);
  var topDelta = (Math.random() * percentDelta) - (percentDelta / 2);

  leftPercentage = leftPercentage + leftDelta;
  if (leftPercentage < 0) {
    leftPercentage = 0;
  }
  if (leftPercentage > 80) {
    leftPercentage = 80;
  }

  topPercentage = topPercentage + topDelta;
  if (topPercentage < 0) {
    topPercentage = 0;
  }
  if (topPercentage > 80) {
    topPercentage = 80;
  }

  return {
    left: leftPercentage + "%",
    top: topPercentage + "%"
  }
}

/*
  This function changes the background to a random color
*/
var animationFrame = function() {
  $("#background").css("background", randomColor());

  $("#mouseContainer").css(randomMovement());

  var currentScore = new Date().valueOf() - timer;
  $("#currentText").text(currentScore / 1000)
}

/*
  Declare a variable to hold our interval
*/
var interval;

/*
  Set up the setInterval loop to change the background every 100ms
  Set the interval loop to the var interval
*/
var startFlashing = function() {
  interval = setInterval(animationFrame, 200)
}

/*
  Stop the interval loop
*/
var stopFlashing = function() {
  clearInterval(interval)
}

var timer;
var highScore = 0;

var isMenuOpen = true;
/*
  Bind a listener to "mouseover" for the mouseContainer
*/
$("#mouseContainer").on("mouseover", function(){
  if (isMenuOpen) {
    return
  }

  timer = new Date().valueOf();
  startFlashing();
})

/*
  Bind a listener to "mouseout" for the mouseContainer
*/
$("#mouseContainer").on("mouseout", function(){
  if (isMenuOpen) {
    return
  }

  var currentTime = new Date().valueOf();
  var roundScore = (currentTime - timer);

  highScore = Math.max(roundScore, highScore);
  
  $("#scoreText").text(highScore / 1000);

  $("#menuText").text(roundScore / 1000);

  stopFlashing();

  $("#menu").show();
  isMenuOpen = true;
});

$("#menuButton").on("click", function(){
  $("#menu").hide();

  isMenuOpen = false;
})

$("#instructionsButton").on("click", function(){
  $("#instructions").hide();

  isMenuOpen = false;
})
