// Bind a listener to the page all being ready and stuff
$(document).on("ready", function(){

  // Retrieve the content of the template on the page
  var templateString = $("#person-template").text();

  // Compile that string into a working Handlebars template function
  var templateFunction = Handlebars.compile(templateString)

  // Execute that function with some object
  var htmlString = templateFunction({ name: "Aaron" })

  // Append that html string to a node on the page
  $("#person-container").append(htmlString)

}