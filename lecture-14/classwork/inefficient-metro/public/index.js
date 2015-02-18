// Global variables to be maintained..

// Active station code 
var activeStationCode = "C09";

// How many minutes away trains should be to be filtered out
var minutesAway = 5;

/*
  This function accepts a stationCode, and executes AJAX to update board
*/
var getMetroData = function(stationCode) {

  // Kick of ajax request
  $.ajax({
    
    // URL of WMATA endpoint (with station code)
    url: "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/" + stationCode,

    // Data object that gets 'serialized' with API Key
    data: {
      api_key: "2c8ba5a78149444982a5a23b74d6966b"
    },

    // HTTP verb
    method: "GET",

    // Static callback function
    success: function(data) {

      // Blank the metroData div with all content
      $("#metroData").html("")
      
      // Filtering out trains that are too close
      var trains = _.filter(data.Trains, function(train) {
        return (train.Min >= minutesAway) && _.isNumber(train.Min * 1);
      })

      // Iterate through valid trains
      _.each(trains, function(train){

        // Create html string container for this train
        var htmlString = "<div class='train'></div>"

        // jQuery-wrap the container
        var $trainHtml = $(htmlString);

        // Append it to the page
        $("#metroData").append($trainHtml);

        // Add divs inside the container with metadata
        $trainHtml.append("<div class='field line'>" + train.Line + "</div>")
        $trainHtml.append("<div class='field cars'>" + train.Car + "</div>")
        $trainHtml.append("<div class='field destination'>" + train.Destination + "</div>")
        $trainHtml.append("<div class='field time'>" + train.Min + "</div>")

      })

    }
  })

}

/*
  This function gets the list of stations and fills the dropdown list
*/
var getStationList = function() {

  // Kick off ajax request
  $.ajax({

    // URL of WMATA endpoint
    url: "https://api.wmata.com/Rail.svc/json/jStations?api_key=kfgpmgvfgacx98de9q3xazww",

    // Method
    method: "GET",

    // Static, inline callback function
    success: function(data) {

      // Sort stations alphabetically
      var stations = _.sortBy(data.Stations, function(station){
        return station.Name
      })

      // Iterate through stations
      _.each(stations, function(station){

        // Create HTML string for station's dropdown item
        var htmlString = "<option></option>"

        // jQuery-wrap
        var $optionHtml = $(htmlString)

        // Set the (display) text of that option to the station's name
        $optionHtml.text(station.Name);

        // Set the "value" attribute of that option to the station's code
        $optionHtml.attr("value", station.Code)

        // Append it to the dropdown
        $("#station").append($optionHtml)

      })

      // After iterating through, set the default value of the dropdown
      // to the active Station code
      $("#station").val(activeStationCode);
      
    }
  })

}

/*
  Retrieves the favorite station from the local endpoint
  Accepts a callback function on completion
*/
var getFavoriteStation = function(callback) {

  // Kick off AJAX request
  $.ajax({

    // URL to retrieve
    url: "/favorite",

    // HTTP verb to use
    method: "GET",

    // Function to execute when complete (the callback parameter)
    success: callback
  })

}

var interval;

// Listener for the "on change" event for the dropdown
$("#station").on("change", function(){

  // Updates active station code
  activeStationCode = $("#station").val()

  // Refreshes metro signboard data
  getMetroData(activeStationCode)

});


// Listener for the "on change" event for the number of minutes field
$("#minutes").on("change", function(){

  // Changes the number of minutes variable (converts value to number)
  minutesAway = ($("#minutes").val() * 1)

  // Refereshes metro signboard data
  getMetroData(activeStationCode)

});

/*
  This is a listener for the start of the page being loaded
*/
$(document).on("ready", function(){

  // Calls the getStationList function
  getStationList()
  
  /*
    Call the getFavoriteStation function
    Pass in an anonymous function that executes as a callback
  */
  getFavoriteStation(function(data){

    // Set the Active Station Code to data.favorite
    activeStationCode = data.favorite

    // Kick off the "refresh the board function"
    getMetroData(activeStationCode)

    // Set the "every 15 seconds" interval to update the metro data
    interval = setInterval(function(){
      getMetroData(activeStationCode)
    }, 15000)

  })

})


