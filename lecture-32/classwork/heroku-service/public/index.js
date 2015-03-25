duplicate([ 1, 2, 3, 4, 5 ]) 
// [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]

anagram("close", "scloe")
// true | false


fizzbuzz(16)
// "12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz16"

// Kyle says this is a good pattern
var BlackBox = function(multiplier) {

  return {
    multiplier: multiplier,

    multiply: function(number) {
      return number * this.multiplier
    }
  }

}
// Kyle says this is a bad pattern
var WhiteBox = function(multiplier) {

  var superMultiplier = multiplier * 2

  return function() {
    return 5 * superMultiplier
  }
}

var z = ( 1 === 1 ? true : false )

var z

if (1 === 1) {
  z = true
}
else {
  z = false
}

var App = {
  Models:  {},
  Collections: {},
  Views: {},

  
}