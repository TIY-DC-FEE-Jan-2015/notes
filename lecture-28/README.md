## Wednesday, March 18th

#### Today we learned:

* What the hell **is** an Angular controller?
    * Creates a new scope -- Angular object-oriented code
    * Nested controllers = inheritance
    * Traversing linked list of controllers inside of controllers
        * `var cursor = $scope.$$childHead`
        * `cursor = cursor.$$nextSibling`
        * This is an "anti-pattern".. try to have single responsibility controllers
* Custom filters
    * `app.filter("name", function(){})` -- returns a function!
    * Returned function takes in input, returns transformed value for display
    * Pass in parameter with `{{ value | filterName:param }}`
* `$http` service for AJAX - dependency injected as controller array/param
    * `$http.verb("url or path", { data: "if necessary "})`
    * Promise-based.. chain `.success(function(data){})` and `.error(function(data){})`

#### Additional Resources

* [Angular Scoreboard application](https://github.com/TIY-DC-FEE-Jan-2015/angular-scoreboard)