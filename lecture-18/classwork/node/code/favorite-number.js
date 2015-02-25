// Require the underscore npm package (read as: "library")
var u = require("underscore")

// Define the get random numbers function, taking in an amount
// as a parameter
var getRandomNumbers = function(amount) {
  var numbers = [4, 8, 15, 16, 23, 42]

  // Get a random sample of (length = amount) from numbers
  var selectedNumbers = u.sample(numbers, amount)

  // Return that sample
  return selectedNumbers
}

/*
  Code for export to other modules
*/
exports = module.exports = {

  // Define functionality to be used by an Express route
  express: function(req, res) {
    // Call the random numbers function with the amount param
    var randomNumbers = getRandomNumbers(parseInt(req.param("amount")))

    // Respond with numbers in JSON
    res.json(randomNumbers)
  },

  // Exports the getRandomNumbers function
  getRandomNumbers: getRandomNumbers

}

