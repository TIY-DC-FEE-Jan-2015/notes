var app = angular.module("todoApp", [])

app.controller("TodoController", [ "$scope", function($scope){

  $scope.choreList = [];

  $scope.buttonClick = function() {
    $scope.choreList.push($scope.chore);
  };

  $scope.deleteClick = function(chore) {
    $scope.choreList = $scope.choreList.filter(function(item){
      return item !== chore;
    });
  };

}])