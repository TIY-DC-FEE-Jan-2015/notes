Handlebars.registerHelper("time", function(value){
  var minutes = Math.floor(value / 60)
  var seconds = (value % 60).toString()

  if (seconds.length === 1) {
    seconds = "0" + seconds
  }

  var text = minutes + ":" + seconds

  return text
})