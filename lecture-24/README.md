## Wednesday, March 11th

#### Today we:

* Did code review from our Transit Screen projects
* Covered Backbone.Router
    * Acts as controller layer in the standard MVC model
    * `<a href="#target">`, `<a name="target>`
    * Listens to hash changes to manage state
* Route-listener mapping in `routes` property
    * `""` = `page.html`
    * `something` = `page.html#something`
    * `something/else` = `page.html#something/else`
    * `something/:id` = `page.html#something/[anything]`
* Manually navigate to hashes: `router.navigate("target", { trigger: true })`