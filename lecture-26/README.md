## Monday, March 16th

#### Today we:

* Talked about [Sails](http://sailsjs.org/#!/)
    * A web framework built *on top of* Express.js
    * `npm install -g sails`
    * `sails new` inside empty directory
    * `sails generate api thing`
* Intelligently replaces boilerplate code (like RoR)
    * Models - talks to many databases
    * Controllers - creates boilerplate routes
    * Views - many different view engines, same syntax
* Database communication language with Waterline
    * `Model.findOne({ id: someNumber }).exec(function(err, data))`
    * Automatic associations with `.populate()`
* Deployment with Heroku
    * A single server (called a "dyno") is free
    * Addons (at sandbox level are free)
    * More things = more money
* How? Install Heroku Toolbelt, `heroku login`
    * `heroku create application-name`
    * `heroku git:remote -a application-name`
    * `git push heroku master`
* Introduced Angular.js!
    * Let's teach HTML new tricks
    * Two-way data-binding, constantly updating individual elements and not re-rendering page
    * Does not play well with others
    * Steep learning curve...

#### Additional Resources

* [That video we watched](https://www.youtube.com/watch?v=i9MHigUZKEM) -- we got ~53 minutes in
* [Our Sails application](https://github.com/kylehill/sails-tiy-demo) -- in a separate repo because of Heroku