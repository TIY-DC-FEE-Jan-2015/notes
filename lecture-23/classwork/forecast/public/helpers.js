Handlebars.registerHelper("timeDisplay", function(value){
  return moment(value * 1000).format("hA")
})

Handlebars.registerHelper("dateDisplay", function(value){
  return moment(value * 1000).format("dddd")
})

Handlebars.registerHelper("temp", function(value){
  var rounded = Math.round(value)

  return rounded + " ℉"
})