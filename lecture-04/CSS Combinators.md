## CSS Combinators

Combinators are used to define nested rules in CSS. It's occasionally best practice to use them, but use them *sparingly* for specific instances -- most of the time, you should be using multiple classes.

A combinator (or a set of combinators) create a complex selector for rules. They're useful for when you want all X to do something, but a specific subset of X to do something else.

#### Descendent

```html
<div class="outside">
    <div class="middle">
        <div class="inside" id="c"></div>
    </div>
    <div class="inside" id="b"></div>
</div>
<div class="inside" id="a"></div>
```

```css
.inside {
/* matches a, b, and c */
}

.outside .inside {
/* matches b and c  */
}
  
.outside > .inside {
/* matches just b */
}
```

Space-delimited (e.g. without another combinator) matches any of the second part inside of the first.

`>` matches any of the second part that are just a single level deep inside of the first.

#### Sibling

```html
<p id="a"></p>
<p id="b"></p>
<div id="c"></div>
<p id="d"></p>
<p id="e"></p>
```

```css
p + p {
/* matches b and e */
}

div + p {
/* matches just d */
}

p ~ p {
/* matches b, d, and e */
}

div ~ p {
/* matches d and e */
}
```

Sibling combinators match elements that follow *on the same level*. The browser looks for the first element in the selector pair, then applies the rules to the **second** element in the pair if applicable.

`+` matches adjacent siblings - only if the next element is a match is the rule applied.

`~` matches general siblings - the rule is applied to any elements following on the same level.

#### References

[CSS Tricks - Child and Descendent Explained](http://css-tricks.com/child-and-sibling-selectors/)