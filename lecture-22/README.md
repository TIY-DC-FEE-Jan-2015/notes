## Wednesday, March 4th

#### Today we:

* Discussed `Backbone.View`
    * By itself: Reusable complex HTML components with automatic event listener binding
    * `var ViewClass = Backbone.View.extend({`
    * Default properties: `tagName`, `className`
    * Has `Backbone.Events` listeners/triggers built in like models
    * Containing element: `this.el` and `this.$el`
* Event binding
    * `events: { "event .selector": "method" }`