var app = angular.module("scoreboardApp", [])

app.controller("SidebarController", ["$scope", "$http", "$interval", function($scope, $http, $interval){

  $scope.userList = []

  $interval(function(){

    $http.get("/api/stats")
      .success(function(data){
        $scope.userList = data.user_clicks
      })

  }, 250)
  

}])

app.controller("ContentController", ["$scope", "$http", "$timeout", function($scope, $http, $timeout){

  $scope.click = function() {

    $http.post("/api/click", { name: $scope.name })
      .success(function(data){
        console.log(data);
      })

  }

}])