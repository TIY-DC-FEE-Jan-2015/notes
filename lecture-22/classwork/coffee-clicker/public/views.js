/*
  Globally scope templates and views
  We're doing this because we're populating them at document ready
  But we'll want to use them in other function scopes
*/
var templates = {}
var views = {}

/*
  Define the header view class
*/
var Header = Backbone.View.extend({

  tagName: "div",

  className: "header-content",

  initialize: function() {
    // Immediately render the template
    this.render()

    // Bind a listener to re-render whenever stats changes
    this.listenTo(stats, "change", this.render)
  },

  render: function() {
    this.$el.html( templates.header(stats.toJSON()) )
  }

})

/*
  Define the "click me to make a coffee" button view class
*/
var CoffeeClick = Backbone.View.extend({

  // Bind a listener to clicking .coffee-button inside of this view
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

  // When the button is clicked, call the addCoffee method on stats
  addCoffee: function() {
    stats.addCoffee()
  }

})

/*
  Define the view for a purchaseble thing
*/
var ThingToBuy = Backbone.View.extend({

  // Bind a listener to the "buy me" button
  events: {
    "click .buy-button": "buy"
  },

  tagName: "div",

  className: "thing-to-buy",

  // Initialize accepts a parameter - a Purchaseable instance
  initialize: function(model) {
    // Stores the model as a property on this view instance
    this.model = model

    // Render immediately
    this.render()

    // Set up listeners for "change" and "check-buyable" events on model
    this.listenTo(model, "change", this.render)
    this.listenTo(model, "check-buyable", this.render)
  },

  render: function() {
    // Calls model.viewDetails() to get the specific subset of data
    this.$el.html( templates.thingToBuy(this.model.viewDetails()) )
  },

  // Calls the buy function on this model to update data
  buy: function() {
    this.model.buy()
  }

})

/*
  Define the view for the flavor text
*/
var FlavorText = Backbone.View.extend({

  // Sets up a listener on the stats instance for the "new-statement" event
  initialize: function() {
    this.listenTo(stats, "new-statement", this.updateStatement)
  },

  // The event is triggered with an add'l parameter, Backbone.Events
  // passes that parameter through to the eventual listener function
  updateStatement: function(statement) {
    this.$el.text(statement)
  }

})

$(document).on("ready", function(){

  // Get and compile the templates
  templates = {
    header: Handlebars.compile( $("#header-template").text() ),
    coffeeClick: Handlebars.compile( $("#coffee-click-template").text() ),
    thingToBuy: Handlebars.compile( $("#purchaseable-template").text() )
  }

  // Instantiate the header view, append to page
  views.header = new Header()
  $("#header-container").append(views.header.el)

  // Instantiate the make coffee button view, append to page
  views.coffeeClick = new CoffeeClick()
  $("#coffee-click-container").append(views.coffeeClick.el)
  
  views.purchaseable = {}

  // For each of the items in the purchaseable collection instance...
  stuffForSale.each(function(item){
    // Get the name attribute of the item
    var name = item.get("name")

    // Create a purchaseable item view for the item
    var view = new ThingToBuy(item)

    // Add it to the globally-scoped view object
    views.purchaseable[name] = view

    // Append it to the page
    $("#purchaseable-container").append(views.purchaseable[name].el)
  })

  // Instantiate the flavor text view
  views.flavorText = new FlavorText({
    // Capture the already-existing div as it's element
    el: $("#hilarious-statement-container")[0]
  })

})