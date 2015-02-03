var beeramid = function(totalMonies, pricePerCan) {

  var cans = numberOfCans(totalMonies, pricePerCan);

  var level = 0;

  while (cans > 0) {

    if (cansInTheNextLevel(level) <= cans) {
      cans = cans - cansInTheNextLevel(level);
      level++;
    }
    else {
      break;
    }

  }

  return level;

}


var numberOfCans = function(totalMonies, pricePerCan) {
  return Math.floor(totalMonies / pricePerCan);
}

var cansInLevel = function(level) {
  return level * level;
}

var cansInTheNextLevel = function(currentLevel) {
  return cansInLevel(currentLevel + 1);
}