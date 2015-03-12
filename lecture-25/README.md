## Thursday, March 12th

#### Today we learned:

* Y'all are jerks
* `Backbone.Router` with `{ pushState: true }`
    * [Only works on new-ish browsers](http://caniuse.com/#search=pushstate) (I lied, IE9 doesn't support it)
    * Requires `router.navigate("client/side/route", { trigger: true })` in order to change route
    * Requires routes to be set up *server-side* to support changed-to URLs
* Building a whole Backbone application! Lessons to keep in mind:
    * When are `Backbone.view`s good?
        1. When you have multiple instances of a class
        2. When you want to manage your state easily
        3. When you just want cleaner, modular code
    * Models and collections have [baked-in events](http://backbonejs.org/#Events-catalog)
    * Model validation
    * Collections can `.add` raw objects and turn them into models, or just models themselves
    * If you're writing <s>display logic</s> anything twice, put it in a function and keep your code DRY