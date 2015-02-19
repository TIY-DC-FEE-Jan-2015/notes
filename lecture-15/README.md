## Thursday, February 19th

#### Today we:

* Learned about underscore templating
    * Realized it sucked, did something else
* Learned about Handlebars templating!
    * The simple way - put a template into `<script type="x-handlebars-template" id="something">`
    * `templateText = $("#something").text()`
    * `templateFunction = Handlebars.compile(templateText)`
    * `$("#container").append(templateFunction({ data: "stuff" }))`
* Handlebars "block" helpers
    * `{{#if property}} {{/if}}`
    * `{{#each property}} {{/each}}`
* Used more AJAX with the WMATA API
* Adding querystring parameters with `data`

#### Additional Resources

* [Handlebars.js](http://handlebarsjs.com/)