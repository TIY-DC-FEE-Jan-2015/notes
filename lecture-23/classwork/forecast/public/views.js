var HeaderView = Backbone.View.extend({

  events: {
    "click .update-button": "updateCoordinates"
  },

  tagName: "header",

  className: "header-view",

  initialize: function() {
    this.render()
  },

  render: function() {
    this.$el.html( templates.header() )
  },

  updateCoordinates: function() {
    var latitude = this.$el.find(".latitude").val()
    var longitude = this.$el.find(".longitude").val()

    this.trigger("update-coordinates", latitude, longitude)
  }

})

var CurrentConditions = Backbone.View.extend({

  tagName: "div",

  className: "current-conditions",

  initialize: function(data) {
    this.render(data)
  },

  render: function(data) {
    this.$el.html( templates.current(data.currently) )
  }

})

var HourlyConditions = Backbone.View.extend({

  tagName: "div",

  className: "hourly-conditions",

  initialize: function(data) {
    this.render(data)
  },

  render: function(data) {
    data.hourly.data = _.first(data.hourly.data, 12)
    this.$el.html( templates.hourly(data.hourly) )
  }

})

var DailyConditions = Backbone.View.extend({

  tagName: "div",

  className: "daily-conditions",

  initialize: function(data) {
    this.render(data)
  },

  render: function(data) {
    this.$el.html( templates.daily(data.daily) )
  }

})