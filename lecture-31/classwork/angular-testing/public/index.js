var app = angular.module("testApp", [])

app.controller("TestController", ["$scope", function($scope){

  $scope.prop = "heck yeah"

  $scope.check = function() { return "1,2" }

}])

app.factory("TestFactory", ["$log", function($log){

  var counter = 0

  return {
    counter: function() {
      return counter
    },

    fn: function(msg) {
      counter++
      $log.log(msg)
    }
  }

}])