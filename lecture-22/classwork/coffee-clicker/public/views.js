var templates = {}
var views = {}

var Header = Backbone.View.extend({

  tagName: "div",

  className: "header-content",

  initialize: function() {
    this.render()
    this.listenTo(stats, "change", this.render)
  },

  render: function() {
    this.$el.html( templates.header(stats.toJSON()) )
  }

})

var CoffeeClick = Backbone.View.extend({

  events: {
    "click .coffee-button": "addCoffee"
  },

  tagName: "div",

  className: "coffee-click",

  initialize: function() {
    this.render()
  },

  render: function() {
    this.$el.html( templates.coffeeClick() )
  },

  addCoffee: function() {
    stats.addCoffee()
  }

})

var ThingToBuy = Backbone.View.extend({

  events: {
    "click .buy-button": "buy"
  },

  tagName: "div",

  className: "thing-to-buy",

  initialize: function(model) {
    this.model = model
    this.render()
    this.listenTo(model, "change", this.render)
    this.listenTo(model, "check-buyable", this.render)
  },

  render: function() {
    this.$el.html( templates.thingToBuy(this.model.viewDetails()) )
  },

  buy: function() {
    this.model.buy()
  }

})

var FlavorText = Backbone.View.extend({

  initialize: function() {
    this.listenTo(stats, "new-statement", this.updateStatement)
  },

  updateStatement: function(statement) {
    this.$el.text(statement)
  }

})

$(document).on("ready", function(){

  templates = {
    header: Handlebars.compile( $("#header-template").text() ),
    coffeeClick: Handlebars.compile( $("#coffee-click-template").text() ),
    thingToBuy: Handlebars.compile( $("#purchaseable-template").text() )
  }

  views.header = new Header()
  $("#header-container").append(views.header.el)

  views.coffeeClick = new CoffeeClick()
  $("#coffee-click-container").append(views.coffeeClick.el)
  
  views.purchaseable = {}

  stuffForSale.each(function(item){
    var name = item.get("name")
    var view = new ThingToBuy(item)

    views.purchaseable[name] = view

    $("#purchaseable-container").append(views.purchaseable[name].el)
  })

  views.flavorText = new FlavorText({
    el: $("#hilarious-statement-container")[0]
  })

})