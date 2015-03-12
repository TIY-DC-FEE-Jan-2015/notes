var views = {}
var templates = {}

var EditView = Backbone.View.extend({

  events: {
    "click #add-item-button": "clickAdd"
  },

  className: "add-item-container",

  initialize: function() {
    this.render()
  },

  render: function() {
    this.$el.html( templates.addItem() )
  },

  editItem: function(model) {
    this.editing = true

    this.editedModel = model

    $("#item-name").val(model.get("name"))
    $("#item-description").val(model.get("description"))
    $("#item-price").val(model.get("price"))

    showForm()
  },

  clickAdd: function() {
    var data = {
      name: $("#item-name").val(),
      description: $("#item-description").val(),
      price: $("#item-price").val(),
      group: $("#item-group").val()
    }

    $("#item-name").val("")
    $("#item-description").val("")
    $("#item-price").val("")
    $("#item-group").val("Appetizer")

    hideForm()

    if (this.editing === true) {
      this.editedModel.set(data, { validate: true })
      this.editing = false
      return
    }

    var newItem = new MenuItem(data, { validate: true })

    menuItems.add(newItem)
  }

})

var MenuView = Backbone.View.extend({

  tagName: "li",

  className: "menu-item",

  events: {
    "click .delete-item": "deleteItem",
    "click .edit-item": "editItem"
  },

  initialize: function(model) {
    this.model = model

    this.listenTo(this.model, "change", this.render)

    this.render()
  },

  render: function() {
    this.$el.html( templates.menu(this.model.display()) )
  },

  deleteItem: function() {
    this.collection.remove(this.model)
    this.remove()
  },

  editItem: function() {
    views.edit.editItem(this.model)
  }

})


var MenuItem = Backbone.Model.extend({

  defaults: {
    name: "Unknown Item Name",
    description: "Literally nothing",
    price: 0,
    group: "Entree"
  },

  validate: function(attributes) {
    
    console.log(attributes)
    
  },

  display: function() {
    var attrs = this.toJSON()
    attrs.id = this.cid

    return attrs
  }

})


var MenuItemCollection = Backbone.Collection.extend({

  model: MenuItem,

  display: function() {

    return this.map(function(model){
      return model.display()
    })

  }

})
var menuItems = new MenuItemCollection()

var showForm = function() {
  $(".add-item-form").addClass("show")
  $(".menu").addClass("hide")
}

var hideForm = function() {
  $(".add-item-form").removeClass("show")
  $(".menu").removeClass("hide")
}

$("#header-add-item").on("click", function(){
  showForm()
})

var updateViews = function() {
  $("#menu").html("")

  menuItems.each(function(model){
    var view = new MenuView(model)

    $("#menu").append(view.$el)

    views[model.cid] = view
  })
}

$(document).on("ready", function(){

  templates = {
    menu: Handlebars.compile( $("#menu-template").text() ),
    addItem: Handlebars.compile( $("#add-item-template").text() ),
  }

  menuItems.on("add", updateViews)
  menuItems.on("remove", updateViews)

  menuItems.add({
    description: "Full of bacon. And nuts.",
    price: 4.95,
    name: "Bacon Nuts"
  }, { validate: true })

  menuItems.add({
    name: "Pot Roast Sandwich",
    price: 11.95,
    description: "Just like Mom used to maybe make when she was tired"
  }, { validate: true })

  views.edit = new EditView()
  $("#add-item-form").html(views.edit.$el)

})