var keys = function(obj) {

  var arrayOfKeys = [];

  for (var name in obj) {

    arrayOfKeys.push(name);

  }

  return arrayOfKeys;

}

var values = function(obj) {

  var arrayOfValues = [];

  for (var name in obj) {
    
    arrayOfValues.push(obj[name])

  }

  return arrayOfValues;

}

var getTestValue = function(obj) {

  var propertyWeWant = "test";

  return obj["test"];

}

var keyUniqueifier = function(left, right) {

  var compositeObject = {};

  for (var name in left) {
    compositeObject[name] = "";
  }

  for (var name in right) {
    compositeObject[name] = "";
  }

  return keys(compositeObject)

}

var larry = function(left, right) {

  var compositeObject = {};

  for (var name in right) {
    compositeObject[name] = right[name];
  }

  console.log("after adding right to C.O:", compositeObject)

  for (var name in left) {
    compositeObject[name] = left[name];
  }

  console.log("after adding left to C.O:", compositeObject)

  return compositeObject;

}



