var Purchaseable = Backbone.Model.extend({

  defaults: {
    baseCost: 10,
    numberOwned: 0,
    coffeePerSecond: 0
  },

  cost: function() {
    return this.get("baseCost") * (this.get("numberOwned") + 1)
  },

  getReturns: function() {
    return this.get("numberOwned") * this.get("coffeePerSecond")
  },

  buy: function() {
    var cost = this.cost()

    if (cost > stats.get("currentCoffee")) {
      return false
    }

    this.set("numberOwned", this.get("numberOwned") + 1)
    stats.set("currentCoffee", stats.get("currentCoffee") - cost)
  },

  viewDetails: function() {
    var details = this.toJSON()
    details.cost = this.cost()
    details.buyable = (this.cost() <= stats.get("currentCoffee"))
    return details
  },

  checkBuyable: function() {
    this.trigger("check-buyable")
  }

})

var PurchaseableCollection = Backbone.Collection.extend({
  model: Purchaseable,

  checkBuyable: function() {
    this.each(function(item){
      item.checkBuyable()
    })
  },

  getReturns: function() {
    return this.reduce(function(memory, item){
      return memory + item.getReturns()
    }, 0)
  }
})

var Statistics = Backbone.Model.extend({

  defaults: {
    currentCoffee: 0,
    totalCoffee: 0,
    timePlayed: 0
  },
  
  processSecond: function() {
    var additionalCoffees = stuffForSale.getReturns()
    stuffForSale.checkBuyable()

    this.set({
      currentCoffee: this.get("currentCoffee") + additionalCoffees,
      totalCoffee: this.get("totalCoffee") + additionalCoffees,
      timePlayed: this.get("timePlayed") + 1
    })

    this.changeTextTimer++

    if (this.changeTextTimer === 10) {
      this.changeTextTimer = 0

      var newStatement = _.sample(flavorText)

      this.trigger("new-statement", newStatement)
    }
  },

  initialize: function() {
    this.start()

    this.changeTextTimer = 0
  },

  stop: function() {
    clearInterval(this.interval)
  },

  start: function() {
    this.interval = setInterval(this.processSecond.bind(this), 1000)
  },

  addCoffee: function() {
    this.set({
      currentCoffee: this.get("currentCoffee") + 1,
      totalCoffee: this.get("totalCoffee") + 1
    })
  }

})

var stats = new Statistics()

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
