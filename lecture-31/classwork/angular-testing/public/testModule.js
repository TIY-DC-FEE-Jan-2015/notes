var mockApp = angular.module("mockModule", [])

mockApp.factory("MockFactory", function(){

  return {

    cypher: function(str, num) {

      if (str === undefined) {
        return ""
      }

      var strArray = str.split("")
      strArray = strArray.map(function(character){
        var charCode = character.charCodeAt(0)
        return String.fromCharCode(charCode + num)
      })

      return strArray.join("")

    }

  }

})

mockApp.filter("mockFilter", function(){

  return function(value) {
    if (value === undefined) {
      return ""
    }
    
    return value.split("").reverse().join("")
  }

})

mockApp.controller("MockController", [ "$scope", "MockFactory", function($scope, MockFactory){

  $scope.resetOutput = function(){

    $scope.output = (MockFactory.cypher($scope.input, 5))

  }

}])