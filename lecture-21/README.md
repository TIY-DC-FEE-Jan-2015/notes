## Tuesday, March 3rd

#### Today we:

* Reviewed `Backbone.Model`
    * Attributes - `.get()`, `.set()`, `.defaults`
    * Properties - `.propertyName`
    * Attributes: data from external source, different for each instance
    * Properties: manage **current state** of model, start at specific value in `.initialize`
    * `.validate` - Enforce constraints on new/edited instances of model
* `Backbone.Collection`
    * By itself: A souped-up version of an array
    * Can bind properties, methods, `.initialize` like models
    * Sortable! (Although we didn't cover that)
    * `model`: All members are created as specific Model type
    * Access members via `.at(index)` or `.get(id | cid)`
    * Has underscore Array methods built-in
* `Backbone.Sync`
    * By itself: ...eh, doesn't really work by itself
    * Handles the AJAX transfer between models/collections and an endpoint
    * By default, works with CRUD routes on **resources**
        * **GET** `/resource` - List all items
        * **GET** `/resource/:id` - List specific item
        * **POST** `/resource` - Create new item
        * **PUT** `/resource/:id` - Update specific item
        * **DELETE** `/resource/:id` - Delete specific item
   * Sync methods accept options with post-data transfer callbacks
* `Sync` with Collections
    * `.fetch()` - populates from server
    * `.create()` - adds new item into collection, creates on server
* `Sync` with Models
    * `.save()` - creates or updates to server
    * `.fetch()` - pulls down current state for this item from server

