/*
  Adds the "time" helper for Handlebars.

  If you add {{ time someValue }} in a Handlebars template now,
    it'll run someValue through this function and print out
    whatever value this function returns
*/
Handlebars.registerHelper("time", function(value){
  // Get the minutes and seconds
  var minutes = Math.floor(value / 60)
  var seconds = (value % 60).toString()

  // Left-pad seconds to two digits
  if (seconds.length === 1) {
    seconds = "0" + seconds
  }

  var text = minutes + ":" + seconds

  return text
})