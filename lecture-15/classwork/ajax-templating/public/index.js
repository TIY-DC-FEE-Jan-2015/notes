var myApiKey = "2c8ba5a78149444982a5a23b74d6966b";

var getElevatorIncidents = function() {

  $.ajax({

    url: "https://api.wmata.com/Incidents.svc/json/ElevatorIncidents",

    data: {
      api_key: myApiKey
    },

    method: "GET",

    success: function(elevatorData) {

      // Filter out just the elevator incidents from WMATA's dataset
      var elevatorsOnly = _.filter(elevatorData.ElevatorIncidents, function(incident){
        return incident.UnitType === "ELEVATOR";
      })

      _.each(elevatorsOnly, function(incident){
        var htmlString = templates.elevatorIncident(incident)

        $("#elevator-container").append(htmlString)
      })

    }

  })

}

// Function that retrieves bus incidents from WMTA
var getBusIncidents = function() {

  // Set up ajax call to WMATA
  $.ajax({
    
    // URL
    url: "https://api.wmata.com/Incidents.svc/json/BusIncidents",
    
    // API Key, which gets serialized into the url by jQuery
    data: {
      api_key: myApiKey
    },
    
    // Method
    method: "GET",
    
    // Success function, called after data retrieval
    success: function (incidentData) {

      // Iterate through each of the bus incidents
      _.each(incidentData.BusIncidents, function(originalIncident){

        /*
          Gets the incident description without the 
            precursor route numbers
        */
        var incidentDescriptionWithoutColon = originalIncident.Description.split(": ")[1]

        /*
          Creates a new object with only the properties we want
        */
        var incidentObject = {
          IncidentType: originalIncident.IncidentType,
          Description: incidentDescriptionWithoutColon,
          RoutesAffected: originalIncident.RoutesAffected
        }

        // Creates an html string with the Handlebars template and our new object
        var htmlString = templates.busIncident(incidentObject)

        // Append that HTML string to the container on the page
        $("#bus-container").append(htmlString);

      })

    }
  })

}


var templates = {};

var getTemplates = function(){

  // Retrieve the bus template from the <script> tag in our HTML file
  var busTemplateString = $("#bus-incident-template").text()

  // Create the Handlebars template function from that
  templates.busIncident = Handlebars.compile(busTemplateString)

  // Same thing for the elevator template
  var elevatorTemplateString = $("#elevator-incident-template").text()
  templates.elevatorIncident = Handlebars.compile(elevatorTemplateString)

}

// Bind listener to on-load
$(document).on("ready", function(){

  getTemplates()
  getElevatorIncidents()
  getBusIncidents();

})