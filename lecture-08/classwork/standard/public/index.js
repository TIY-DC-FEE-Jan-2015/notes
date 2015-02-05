var genericReduce = function(array, iterator, memory) {
  for (var i = 0; i < array.length; i++) {
    memory = iterator(memory, array[i]);
  }

  return memory;
}

var subtract = function(memory, item) {
  return memory - item;
}



var sum = function(memory, item) {
  return memory + item;
}

var sumOdd = function(memory, item) {
  if (item % 2 === 0) {
    return memory;
  }

  return memory + item;
}

var sumArray = function(array) {
  var memory = 0;
  for (var i = 0; i < array.length; i++) {
    memory = sum(memory, array[i]);
  }

  return memory;
}

var sumOddsOfArray = function(array) {
  var memory = 0;
  for (var i = 0; i < array.length; i++) {
    memory = sumOdd(memory, array[i]);
  }

  return memory;
}


///


var genericFilter = function(array, iterator) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    if (iterator(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray;
}


var isEven = function(value) {
  return (value % 2 === 0)
}

var evensOnly = function(array) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    if (isEven(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray;
}

var itemIsBig = function(value) {
  return (value > 10);
}

var greaterThan10 = function(array) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    if (itemIsBig(array[i])) {
      newArray.push(array[i])
    }
  }

  return newArray;
}




// THERE BE MAP BELOW HERE YARRRRR


var jeweleryStore = function(string) {
  return string + "ring";
}

var addARingToIt = function(array) {
  return array.map(jeweleryStore)
}

var arrayTransmodificator = function(array, iterator) {
  for (var i = 0; i < array.length; i++) {
    array[i] = iterator(array[i])
  }

  return array;
}

var doubleItem = function(item) {
  return item * 2;
}

var tripleItem = function(item) {
  return item * 3;
}

var doubler = function(array) {
  array = arrayTransmodificator(array, doubleItem)
  return array
}

var tripler = function(array) {
  return arrayTransmodificator(array, tripleItem)
}