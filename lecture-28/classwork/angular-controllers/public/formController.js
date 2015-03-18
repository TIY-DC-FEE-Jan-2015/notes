var formController = angular.module("formModule", [])

formController.controller("FormController", [ "$scope", function($scope){
  
  $scope.errors = {}

  $scope.activateButton = function() {

    $scope.errors = {}

    if (!$scope.name) {
      $scope.errors.name = "error"
    }

    if (!$scope.occupation) {
      $scope.errors.occupation = "error"
    }

  };

  
}])


/*
  $scope.fieldValues = []
  
  var cursor = $scope.$$childHead;
  $scope.fieldValues.push(cursor.value)

  while (cursor.$$nextSibling) {
    cursor = cursor.$$nextSibling;
    $scope.fieldValues.push(cursor.value)
  }

  console.log($scope.fieldValues)

*/