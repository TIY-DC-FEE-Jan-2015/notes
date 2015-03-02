// Creates a cross-code generic event dispatcher
var EventDispatcher = _.extend({}, Backbone.Events)

// Defines the Beer class, extending the generic Backbone Model
var Beer = Backbone.Model.extend({

  // Sensisble default attributes in case things aren't passed in
  defaults: {
    title: "Unknown Title",
    abv: 0,
    style: "Water"
  },

  // A method that returns a specific subset of data for our template
  details: function() {
    // Get a generic object with all of the attributes, minus "rating" if present
    var details = _.omit(this.toJSON(), "rating")

    // Set that object's sessionable property to the result of this.sessionable()
    details.sessionable = this.sessionable()

    return details
  },

  // A method that returns whether or not this item's abv attribute is < 6
  sessionable: function() {
    return (this.get("abv") < 6)
  },

  // This function gets executed 
  initialize: function(attributes) {
    // Whenever this item changes, trigger the "update-beer-list"
    // custom event on the EventDispatcher
    this.on("change", function(){
      EventDispatcher.trigger("update-beer-list")
    })
  }

})

var templates = {}

// Default list o' beers
var beerList = [
  new Beer({ style: "IPA", rating: 95, brewery: "Kyle's Kitchen", abv: 6, title: "Lowenbraü" }),
  new Beer({ style: "Belgian Tripel", brewery: "Kyle's Kitchen", abv: 9, title: "Third Base Ale" }),
  new Beer({ style: "Lager", brewery: "Beer", abv: 4, title: "Meh" }),
  new Beer()
]

// Function to update the beer list UI
var updateBeerListUI = function() {
  // Clear the existing content
  $("#beer-list").html("")

  // For each beer in the beer list,
  _.each(beerList, function(beer){
    // Get the HTML by fitting the template on data returned
    // by this beer's details() method
    var beerHtml = templates.beer(beer.details())

    // Create a jQ-wrapped element; append it to the page
    var $beerItem = $(beerHtml)
    $("#beer-list").append($beerItem)

    // Bind a listener to "click" event on the .remove-beer button
    $beerItem.find(".remove-beer").on("click", function(){
      // Get the title of this beer (added via HBS)
      var beerTitle = $(this).closest(".beer").attr("data-beer-title")

      // Set the beer list equal to itself, except with this beer filtered out
      beerList = _.filter(beerList, function(beer){
        return beer.get("title") !== beerTitle
      })

      // Update the beer list
      EventDispatcher.trigger("update-beer-list")
    })
  })
}

// Function to create a new beer
var createBeer = function() {
  // Create a new Beer instance with the input data
  var newBeer = new Beer({
    style: $("#style").val(),
    brewery: $("#brewery").val(),
    abv: $("#abv").val(),
    title: $("#title").val()
  })

  // Add it to the existing beer list
  beerList.push(newBeer)

  // Update the beer list
  EventDispatcher.trigger("update-beer-list")
}

// Whenever the EventDispatcher has the "update-beer-list" custom event
// trigged, execute the updateBeerListUI function
EventDispatcher.on("update-beer-list", updateBeerListUI)

// Listener for the "create a new beer button"
$("#new-beer-button").on("click", createBeer)

$(document).on("ready", function(){
  // Get and compile the template
  var templateText = $("#beer-details").text()
  templates.beer = Handlebars.compile(templateText)

  // Kick off the updateBeerListUI function
  updateBeerListUI()
})
