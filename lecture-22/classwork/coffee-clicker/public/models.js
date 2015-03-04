/*
  Defines a model for a purchaseable item in an incremental-style game
*/
var Purchaseable = Backbone.Model.extend({

  // Sensible defaults...
  defaults: {
    baseCost: 10,
    numberOwned: 0,
    coffeePerSecond: 0
  },

  // No .initialize() function because we don't need 
  // to do anything special on instantiation

  // Method to return the cost of the next item in this group to be purchased
  cost: function() {
    return this.get("baseCost") * (this.get("numberOwned") + 1)
  },

  // Method to return the amount of coffees this item produced this second 
  getReturns: function() {
    return this.get("numberOwned") * this.get("coffeePerSecond")
  },

  // Method to increment the number of items in this group
  buy: function() {

    // Validate that this is purchaseable first
    var cost = this.cost()

    if (cost > stats.get("currentCoffee")) {
      return false
    }

    // Increment the number of items in the group
    this.set("numberOwned", this.get("numberOwned") + 1)

    // Subtract the cost for this item from the group
    stats.set("currentCoffee", stats.get("currentCoffee") - cost)
  },

  // Method to produce a data subset for the template
  viewDetails: function() {
    // Get this model's attributes as an object
    var details = this.toJSON()

    // Add the cost for the next item
    details.cost = this.cost()

    // Add whether or not the next item is currently buyable
    details.buyable = (this.cost() <= stats.get("currentCoffee"))

    return details
  },

  // Just bubble the event through the view that's watching it.
  checkBuyable: function() {
    this.trigger("check-buyable")
  }

})

/*
  Defines a collection of purchaseable items
*/
var PurchaseableCollection = Backbone.Collection.extend({

  // Define the model class to use for all entries in the collection
  model: Purchaseable,

  // Bubble the "check buyable" method down to each item
  checkBuyable: function() {
    this.each(function(item){
      item.checkBuyable()
    })
  },

  // Execute the getReturns function on each item in this collection
  // Return the sum (aka all coffee added this second)
  getReturns: function() {
    return this.reduce(function(memory, item){
      return memory + item.getReturns()
    }, 0)
  }
})

/*
  Define a model that will act as a driver for the entire application
*/
var Statistics = Backbone.Model.extend({

  // Stats we're using...
  defaults: {
    // Current amount of coffee
    currentCoffee: 0,

    // Total amount of coffee earned and spent
    totalCoffee: 0,

    // Seconds this game has been played
    timePlayed: 0
  },

  // This function gets executed every single, so it acts as a clock
  processSecond: function() {
    // Get the current amount of coffee for this second
    var additionalCoffees = stuffForSale.getReturns()

    // Updates current details
    this.set({
      currentCoffee: this.get("currentCoffee") + additionalCoffees,
      totalCoffee: this.get("totalCoffee") + additionalCoffees,
      timePlayed: this.get("timePlayed") + 1
    })

    // Trigger the "check-buyable" event on all items and views listening to them
    stuffForSale.checkBuyable()

    /*
      Handles the "change the hilarious quote" every 10 seconds stuff
    */
    this.changeTextTimer++

    if (this.changeTextTimer === 10) {
      this.changeTextTimer = 0

      var newStatement = _.sample(flavorText)

      this.trigger("new-statement", newStatement)
    }
  },

  initialize: function() {
    // Start the timing loop
    this.start()

    // Provide a starting point for the "change this every 10 secs" text
    this.changeTextTimer = 0
  },

  // Stop the timing loop (always good to have an mechanism for this)
  stop: function() {
    clearInterval(this.interval)
  },

  // Start the timing loop
  start: function() {
    this.interval = setInterval(this.processSecond.bind(this), 1000)
  },

  // Listener for when the "Make Coffee" button is clicked
  addCoffee: function() {
    this.set({
      currentCoffee: this.get("currentCoffee") + 1,
      totalCoffee: this.get("totalCoffee") + 1
    })
  }

})

// Instantiate a stats-keeping model
var stats = new Statistics()

// Instantiate a purchaseable item collection
var stuffForSale = new PurchaseableCollection()
stuffForSale.add([
  { name: "Coffee Pot", baseCost: 10, coffeePerSecond: 1 },
  { name: "Pourover Station", baseCost: 100, coffeePerSecond: 5 },
  { name: "Barista", "baseCost": 1000, coffeePerSecond: 25 },
  { name: "Espresso Machine", "baseCost": 10000, coffeePerSecond: 125 }
])

var flavorText = [
  "This coffee has notes of chocolate, raspberries, and fine leather",
  "I am wearing a scarf indoors",
  "I rode my fixie over here",
  "'Did you know that coffee is a delicious' - some guy",
  "This is Potomac Falls which is our Guatemalan roast, for more adventurous people",
  "No, Su, you cannot have decaf",
  "Can't we just pull from, like, a Coffee Ipsum?"
]
