var newsApp = angular.module("newsApp", ["ui.router"])

newsApp.config([ "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("index", {
      url: "",
      views: {
        "header": { templateUrl: "partials/header.html" },
        "headline": { templateUrl: "partials/headline.html" },
        "subheadline": { templateUrl: "partials/subheadline.html" },
        "america": { templateUrl: "partials/feature.html" },
        "world": { templateUrl: "partials/feature.html" }
      }
    })

}])

newsApp.controller("HeaderController", ["$scope", function($scope){

  $scope.headerItems = [
    "News",
    "Sport",
    "Weather",
    "Earth",
    "Future",
    "Shop",
    "TV",
    "Radio",
    "More..."
  ]

}])

newsApp.controller("HeadlineController", ["$scope", function($scope){

  $scope.date = "Thursday, 19 March";
  $scope.headline = "Tunis gunman 'known to authorities'";
  $scope.text = "One of two gunmen who carried out an attack that killed 20 tourists at a Tunis museum was known to the authorities, Tunisia's PM says.";
  $scope.imageUrl = "http://ichef.bbci.co.uk/wwhp/624-351/mcs/media/images/81756000/jpg/_81756619_466692624.jpg";

}])

newsApp.controller("SubheadlineController", ["$scope", function($scope){

  $scope.subheadlineItems = [
    {
      image: "http://ichef.bbci.co.uk/wwhp/ic/ibroadcast/624-351/images/live/p0/2m/8t/p02m8tvh.jpg",
      text: "'One of the greatest buildings of all time'",
      url: "http://www.bbc.com/culture/story/20150319-one-of-the-great-buildings"
    },
    {
      image: "http://ichef.bbci.co.uk/wwhp/ic/ibroadcast/624-351/images/live/p0/2m/7x/p02m7x9g.jpg",
      text: "The private investigator who uses drones to spy on people",
      url: "http://www.bbc.com/future/story/20150318-i-use-a-drone-to-spy-on-people"
    },
    {
      image: "http://ichef.bbci.co.uk/wwhp/ic/ibroadcast/624-351/images/live/p0/2m/9g/p02m9gpk.jpg",
      text: "‘I have no arms and legs that weigh me down’",
      url: "http://www.bbc.com/capital/story/20150318-leading-without-limbs",
      glyph: "play-button"
    },
    {
      image: "http://ichef.bbci.co.uk/wwhp/ic/news/144-81/81717000/jpg/_81717740_462409110.jpg",
      text: "Is this the most hated job in the US?",
      url: "http://www.bbc.com/news/world-us-canada-31933238"
    }
  ]

}]);

newsApp.controller("AmericaController", [ "$scope", "getData", function($scope, getData){

  getData("/api/america", function(data){

    $scope.data = data

  });

}]);

newsApp.controller("WorldController", [ "$scope", "getData", function($scope, getData){

  getData("/api/world", function(data){

    $scope.data = data

  });

}]);

newsApp.factory("getData", [ "$http", function($http){

  return function(url, callback) {

    $http.get(url).success(callback).error(callback)

  }

}])