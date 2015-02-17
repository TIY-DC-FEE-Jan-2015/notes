## Tuesday, February 17th

#### Today we:

* Learned about AJAX
    * **A**synchronous **J**avascript **A**nd **X**ML
    * Native browser method: `XMLHttpRequest`
    * Makes requests from JS on a page to web server
    * Requests a specific URL with a specific method
* Implemented AJAX with jQuery
* `$.ajax`, accepts object with properties
    * `url`: The (relative or absolute path) URL to hit
    * `method`: The HTTP verb to use with the request
    * `data`: Any data to send along with the request
    * `success`: Function to execute when data returns with 200- or 300-status code
    * `error`: Function to execute when data returns with 400- or 500-status code
* Examples of AJAX
    * Twitter
    * Google Maps
    * GMail
    * Pretty much every "rich" single-page site on the planet
    * Usually minified/uglified so it's unreadable :(