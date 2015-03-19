var app = angular.module("routerApp", ["ui.router"])

app.config([ "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state("active", {
      views: {
        left: {
          templateUrl: "partials/a.html"
        },
        right: {
          templateUrl: "partials/c.html"
        }
      }
    })
    .state("index", {
      views: {
        left: {
          templateUrl: "partials/a.html"
        },
        right: {
          templateUrl: "partials/b.html"
        }
      }
    })
    
    $urlRouterProvider.otherwise("index")

}])