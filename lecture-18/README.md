## Wednesday, February 25th

#### Today we:

* Learned about, and used [node.js](http://www.nodejs.org)
* [Express.js](http://expressjs.com)
    * Can serve static files...
    * Also listens for dynamic routes: `app.verb("/routeName", function(req, res){})`
    * `req.param("paramName")`
    * `res.sendFile` - static files
    * `res.json` - JSON data, mostly for APIs/AJAX
    * `res.render` - renders a server-side template into HTML
* Pulling in external code via [npm](npmjs.org)
    * Packages listed/detailed/searchable on website
    * Installed with `npm install packageName`
    * Install all dependencies listed in `package.json`
    * Save new depedencies with `npm install --save packageName`
* Practice with [Handlebars](http://www.handlebarsjs.com) (now on the server side!)
    * `{{#each someArray}}`
    * `{{#if someProperty}}`

    