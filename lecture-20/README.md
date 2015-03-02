## Monday, March 2nd

#### Today we:

* Reviewed the **TodoRPG** homework
    * Adding `data-` attributes with Handlebars
    * Dynamic jQuery listeners
    * Using `data-` attributes with jQuery listeners
    * Multiple AJAX calls
* **M**odel-**V**iew-**C**ontroller
    * Look at my terrible art
    * A pattern for re-usable, testable code
    * Separation of concerns
* "Users" interact with **views**
    * A user can be a person viewing your webpage (us)
    * A user can be some other software accessing your route (RoR)
* **Models** are discrete pieces of information
    * A model knows how to interact with data storage elsewhere
    * A model can create, update, and delete itself
* **Controllers** bind views and models together
    * User clicks on button (view layer)
    * "That button updates this item" (controller layer)
    * Item updates attributes elsewhere (model layer)
    * Item finishes updating (model layer)
    * "Here is the new information to display for this item" (controller layer)
    * Displays updated info (view layer)
* Backbone.Model
    * By itself: Really good generic object-oriented code
    * Attributes -- `new Thing({ attr: true })`, `thing.get("attr")`
    * Properties -- `thing.prop = false`, `thing.method()`
    * Attributes have change events, work with `.toJSON()`, must `.get` and `.set`
    * `var Book = Backbone.Model.extend({ customStuff: })`
    * `defaults: { }`
* Backbone.Events
    * By itself: Cross-code event dispatcher
    * Baked into everything in Backbone
    * `model.on("change", doSomething)`
    * `var EventDispatcher = _.extend({}, Backbone.Events)`
    * `EventDispatcher.on("some-custom-event", doSomething)`