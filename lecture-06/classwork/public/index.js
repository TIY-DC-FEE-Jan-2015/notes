var mode = function(steve, al) {

  if (steve % 2 === 0) {
    return steve / al;
  }

  return steve * al;
}


var roundToTen = function(input) {
  var a = (input % 10);

  if (a < 0) {
    if (a < -5) {
      return input - (10 + a);
    }

    return input - a;
  }

  if (a < 5) {
    return input - a;
  }

  return input + (10 - a);

}

var fibonnaci = function(n) {

  var counter = 0;
  var a = 0;
  var b = 1;

  var temp;

  while(counter < n) {
    counter++;

    temp = a + b;
    a = b;
    b = temp;

  }

  return a;

}