## Wednesday, March 25th

#### Today we:

* **Heroku**
    * Sign up for an account
    * Download/install [heroku toolbelt](https://toolbelt.heroku.com/)
    * `heroku login`
    * From a project with an initialized git repo: `heroku create app-name`
    * `git push heroku master`
* **Closures**
    * Created when a function *returns another function* (or an object/array which contains a function)
    * Any variables scoped at the same level as the returned function are accessible by that function after being returned
    * Downsides: not what JS was intended for; leads to memory leaks; leads to difficult-to-debug code
* **`.apply()` vs `.call()`**
    * First parameter overrides whatever `this` would have been
    * .apply for `arguments` or arrays
    * .call shifts parameters over
    * `fn.call(obj, 3, 4, 5)` === `fn.apply(obj, [3, 4, 5])`
* **Bower**
    * Front-end package manager (`npm install -g bower`)
    * `bower init` creates a `bower.json` file
    * `bower install --save package-name` ("angular", "moment", "handlebars" etc)
* **Browser Detection**
    * The old way - detecting the User-Agent string produced by each browser as an identifier, degrading features based on that
    * The better way - feature detection, if a browser can do X then execute a function that relies on it
    * Library for feature detection: [Modernizr](http://modernizr.com/)