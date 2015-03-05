var makeForecastRequest = function(latitude, longitude, callback) {

  $.ajax({
    method: "GET",
    url: "/data",
    data: {
      latitude: latitude,
      longitude: longitude
    },
    success: function(data) { 
      callback(data) 
    }
  })

}

var positionHandler = function(geoposition) {
  makeForecastRequest(
    geoposition.coords.latitude, 
    geoposition.coords.longitude,
    instantiateViews
  )
}

var templates;
var views = {}
var getTemplates = function() {

  templates = {
    current: Handlebars.compile( $("#current-template").text() ),
    hourly: Handlebars.compile( $("#hourly-template").text() ),
    daily: Handlebars.compile( $("#daily-template").text() ),
    header: Handlebars.compile( $("#header-template").text() )
  }

}

var updateViews = function(data) {
  views.current.render(data)
  views.hourly.render(data)
  views.daily.render(data)
}

var instantiateViews = function(data) {

  console.log(data)

  views.current = new CurrentConditions(data)
  $("#current-container").html( views.current.$el )

  views.hourly = new HourlyConditions(data)
  $("#hourly-container").html( views.hourly.$el )

  views.daily = new DailyConditions(data)
  $("#daily-container").html( views.daily.$el )

  views.header = new HeaderView()
  $("#header-container").html( views.header.$el )

  views.header.on("update-coordinates", function(lat, lon){
    makeForecastRequest(lat, lon, updateViews)
  })

}

$(document).on("ready", function(){

  getTemplates()

  navigator.geolocation.getCurrentPosition(positionHandler)

})