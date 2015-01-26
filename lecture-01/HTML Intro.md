## HTML Intro

#### Elements of HTML

```html
<tag attribute="value">content</tag>
```

* all tags must be closed
* exception: self-closing tags
* nesting tags

```html
<!-- Good -->
<outside>
    <inside>
    </inside>
</outside>

<!-- Bad -->
<outside>
    <inside>
</outside>
    </inside>

<!-- (this is an HTML comment by the way) -->
```

You can use any word as a tag, but browsers only know what to do with some of them.

#### Structure

```html
<!-- DOCTYPE specifies what version of HTML you're using. -->
<!-- Below is the simple one for HTML 5. Just use this. -->

<!DOCTYPE html>

<!-- Everything gets wrapped in an <html> tag -->
<html>


    <head>

        <!-- Information used by browser goes here -->
        <title> Page title, in browser/tab title bar </title>

    </head>
    <body>

        <!-- Content goes here -->

    </body>

</html>
```

#### Content Tags

* `<a>` - Anchor link
* `<p>` - Paragraph
* `<br>` - Line break
* `<img>` - Image
* `<ol>` - Ordered list
* `<ul>` - Unordered list
* `<li>` - List item (for use in `<ol>` and `<li>`)
* `<h1>`, `<h2>`,.. `<h6>` - Headings
* `<table>`, `<tr>`, `<td>` - Table, row, cell

#### Generic Section/Content Tags

* `<div>` - Generic content section
* `<span>` - Generic content section, displays inline

#### Special Attributes

* `id`
* `class`
* `src` - used by `<script>` and `<img>`
* `href` - used by `<link>` and `<a>`


## References

[Mozilla - HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)