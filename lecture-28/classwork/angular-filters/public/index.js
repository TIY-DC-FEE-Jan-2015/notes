var filterApp = angular.module("filterApp", []);

filterApp.controller("FilterController", [ "$scope", function($scope){



}])

filterApp.filter("reverse", function(){

  return function(input, character) {

    if (!input) {
      return "";
    }

    if (character) {
      return character + input.split("").reverse().join("") + character;
    }

    return input.split("").reverse().join("");

  }

})