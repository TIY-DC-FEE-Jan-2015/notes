/*
  Defines the beer model
*/
var Beer = Backbone.Model.extend({

  validate: function(attributes) {
    if (!attributes.title) {
      return "Needs a title"
    }

    if (attributes.abv < 2) {
      return "This is not a beer"
    }
  }

})

/*
  Defines the Store collection
*/
var Store = Backbone.Collection.extend({

  url: "/beers",
  model: Beer

})

var switchUI = function() {
  $(".all-beers").toggle()
  $(".specific-beer").toggle()
}

var updateUI = function() {
  $("#beer-list").html("")

  store.each(function(beer){
    var htmlString = templates.beer(beer.toJSON())
    var $itemHtml = $(htmlString)

    $("#beer-list").append($itemHtml)

    $itemHtml.find(".delete-button").on("click", function(){

      var id = $(this).attr("data-id")

      store.get(id).destroy({
        complete: updateUI
      })

    })

    $itemHtml.find(".edit-button").on("click", function(){

      switchUI()

      var id = $(this).attr("data-id")
      var beer = store.get(id)

      $("#edit-title").val(beer.get("title"))
      $("#edit-abv").val(beer.get("abv"))
      currentlyEditedId = id

    })
  })
}

var store = new Store()
var templates = {}
var currentlyEditedId

$("#add-button").on("click", function(){
  var title = $("#add-title").val()
  var abv = $("#add-abv").val()

  var beer = new Beer({
    title: title,
    abv: abv
  })

  if (beer.isValid() === true) {
    store.add(beer)

    beer.save({}, {
      complete: updateUI
    })
    
    $("#add-title").val("")
    $("#add-abv").val("")
  }
  else {
    alert(beer.validationError)
  }
})

$("#cancel-button").on("click", switchUI)

$("#edit-button").on("click", function(){
  var title = $("#edit-title").val()
  var abv = $("#edit-abv").val()

  var beer = store.get(currentlyEditedId)

  beer.set("title", title)
  beer.set("abv", abv)

  if (beer.isValid()) {
    beer.save({}, {
      complete: function(){
        updateUI()
        switchUI()
      }
    })
  }
  else {
    alert(beer.validationError)
  }
})

$(document).on("ready", function(){

  templates.beer = Handlebars.compile( $("#beer-template").text() )

  store.fetch({
    success: function() {
      updateUI()
    }
  })

})

