## Advanced HTML

#### Semantic HTML

Bad practice: using generic tags (`<div>` and `<span>`) everywhere.

Always use the closest HTML tag for what you're making. If the default style for that tag isn't what you want, you can change it with CSS. Why?

1. Page-crawling robots
2. Accessibility
3. Helps keep source readable and maintainable

New sectioning tags:

* `<section>`
* `<nav>`
* `<article>`
* `<aside>`
* `<header>` (not to be confused with `<head>`)
* `<footer>`
* `<main>`
* `<blockquote>`

New text-level tags:

* `<pre>` - "Preformatted"
* `<code>` - Default style is monospaced
* `<em>` - "Emphasis", default style is italics
* `<strong>` - Default style is bold
* `<small>` - Side comments (citations and notes)
* `<q>` - Inline quotation
* `<s>` - Default style is strikethrough

#### Interactive Element Tags

* `<label>` - Makes helper text for input clickable
* `<select>` - Dropdown list containing `<option>`
* `<button>` - I bet you can guess
* `<input>` - Collects user input, defined by `type` attribute
    * `text`
    * `password`
    * `radio`
    * `checkbox`
    * `file`

Default text values with the `value` attribute.

Default checkbox/radio buttons with the `checked` attribute.

#### Custom Attributes

Just like tag names, you can put any named attributes inside any tag; the browser just only knows what to do with some of them.

If you're adding in attributes that are intended to be used by JavaScript that's running on the page, convention is to use a `data-` prefix to avoid namespace collisions.

Example:

```html
<a href="http://academy.theironyard.com"
   data-link-id="TIY"> The Iron Yard </a>
```

#### Accessibility

What do we mean by "accessibility"?

* People with limited physical capabilities
* Devices of limited connection/display capabilities
* Non-English speakers relying on translation services

Fortunately, following best practices makes things easier for everyone. Get into the habit now and it'll be second nature soon.

* Add `alt` attributes to multimedia, **especially** `<img>`.
* Make sure your HTML validates!
* Use semantic HTML
* Check page with CSS (and JS) turned off, make sure content is intelligible

#### References

* [W3C - HTML Validator](http://validator.w3.org/)
* [Mozilla - HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [Mozilla - HTML Input Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input)
* [Penn State University - Accessibility Checklist](http://accessibility.psu.edu/checklist)
