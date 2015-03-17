var app = angular.module("progressApp", []);

app.controller("ProgressController", [ "$scope", "$timeout", "$document", function($scope, $timeout, $document){

  $scope.buttonClick = function() {

    $document[0]
      .getElementsByClassName("progress-bar")[0]
      .style.width = "100%";

    $timeout(function(){
      
      $document[0]
        .getElementsByClassName("progress-bar")[0]
        .style.width = "0%";

    }, 4000);

  };

}]);