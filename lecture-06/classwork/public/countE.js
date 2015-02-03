function isOdd (num) {
  if (num % 2 !== 0) {
    return true;
  }

  return false;
}

function oddCounter (arr) {

  var counter = 0;
  
  var numberOfOdds = 0;

  while (counter < arr.length) {
    
    if ( isOdd( arr[counter] ) ) {
      numberOfOdds++;
    }

    counter++;
  }

  return numberOfOdds;

}

function isAnE (letter) {
  if (["e", "E"].indexOf(letter) > -1) {
    return true;
  }

  return false;
}

function eCounter (str) {

  var counter = 0;
  var numberOfEs = 0;

  while (counter < str.length) {
    
    var letterThatWeAreLookingAtToday = str[counter];
    
    var isItActuallyAnE = isAnE(letterThatWeAreLookingAtToday);

    if (isItActuallyAnE === true) {
      numberOfEs++;
    }

    counter++;
  }

  return numberOfEs;

}