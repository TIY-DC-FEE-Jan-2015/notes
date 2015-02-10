## Tuesday, February 10th

#### Today we:

* Built stuff with jQuery
    * `.toggleClass("className")`
    * `.hide()`, `.show()`, `.toggle()`
    * Using jQuery methods as both getters **and** setters (`.val()`, `.val("")`)
* Setting up listeners
    * The parameter: a jQuery-wrapped event
    * `this`: what the user interacted with
    * Different information contained in each
* How to create an element:
    * 1. Create the HTML string of the content
    * 2. (optional) Create a jQuery-wrapped element, not on the page
    * 3. `.append` or `.prepend` the HTML string or jQuery-wrapped element to something that's on the page
    * 4. (optional) Set up listeners for that new element
* Some CSS hackery
    * We **finally** discussed `background-image` (sorry)
    * More fun with `box-sizing: border-box`
    * Vertically centering content (IE 9+):
        * `position: relative`
        * `top: 50%`
        * `transform: translateY(-50%)`


#### Additional Resources

* [CSS Vertical Center](http://davidwalsh.name/css-vertical-center) blog post
* [jQuery documentation](http://api.jquery.com/) -- seriously, read through this
* [MDN - CSS background property](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
* [CanIUse](http://caniuse.com)