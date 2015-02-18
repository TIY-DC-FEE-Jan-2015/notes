var activeStationCode = "C09";
var minutesAway = 5;

var getMetroData = function() {

  $.ajax({
    url: "https://api.wmata.com/StationPrediction.svc/json/GetPrediction/" + activeStationCode,
    data: {
      api_key: "2c8ba5a78149444982a5a23b74d6966b"
    },
    method: "GET",
    success: function(data) {

      $("#metroData").html("")
      
      var trains = _.filter(data.Trains, function(train) {
        return (train.Min >= minutesAway) && _.isNumber(train.Min * 1);
      })

      _.each(trains, function(train){

        var htmlString = "<div class='train'></div>"

        var $trainHtml = $(htmlString);

        $("#metroData").append($trainHtml);

        $trainHtml.append("<div class='field line'>" + train.Line + "</div>")
        $trainHtml.append("<div class='field cars'>" + train.Car + "</div>")
        $trainHtml.append("<div class='field destination'>" + train.Destination + "</div>")
        $trainHtml.append("<div class='field time'>" + train.Min + "</div>")

      })

    }
  })

}

var getStationList = function() {

  $.ajax({
    url: "https://api.wmata.com/Rail.svc/json/jStations?api_key=kfgpmgvfgacx98de9q3xazww",
    method: "GET",
    success: function(data) {

      var stations = _.sortBy(data.Stations, function(station){
        return station.Name
      })

      _.each(stations, function(station){

        var htmlString = "<option></option>"
        var $optionHtml = $(htmlString)

        $optionHtml.text(station.Name);
        $optionHtml.attr("value", station.Code)

        $("#station").append($optionHtml)

      })

      $("#station").val(activeStationCode);
      
    }
  })

}

var interval;

$("#station").on("change", function(){

  activeStationCode = $("#station").val()
  getMetroData()

});

$("#minutes").on("change", function(){

  minutesAway = ($("#minutes").val() * 1)
  getMetroData()

});

$(document).on("ready", function(){

  getMetroData()
  getStationList()
  interval = setInterval(getMetroData, 15000)

})
