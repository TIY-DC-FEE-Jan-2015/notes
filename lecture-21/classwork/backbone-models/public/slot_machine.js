/*
  The Slot Machine Backbone Collection
*/
var SlotMachine = Backbone.Collection.extend({

  initialize: function() {

  },

  model: Reel,

  showResults: function() {
    return this.map(function(reel){
      return reel.display()
    })
  },

  spin: function() {
    this.each(function(reel){
      reel.trigger("spin")

      this.listenTo(reel, "stopped", this.stopNext)
    }, this)

    this.stopNext()
  },

  stopNext: function() {
    var currentReel = this.find(function(reel){
      return reel.spinning === true
    })

    if (currentReel) {
      currentReel.trigger("stop")
      this.stopListening(currentReel, "stopped")
    }
    else {
      return this.showResults()
    }
  }

})

var sm = new SlotMachine()

sm.add([
  { symbols: ["Horse", "Dog", "Cat", "Cow", "Farmer"], blankRate: 0 }
])