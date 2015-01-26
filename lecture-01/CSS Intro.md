## CSS Intro

#### Elements of CSS

**Rules** are comprised of one or more **property**/**value** pairs that correspond to a **selector**.

```css
selector {
  property: value;
  another-property: differentValue;
}
```

Selectors can include:

* Elements
* Classes (prefix with ".")
* IDs (prefix with "#")
* HTML attributes (`[attribute=value]`)
* Pseudo-classes (`:first-child`, `:hover`, etc)

Selectors can be combined...

* `div.important`
* `.orange.bold` 
* `.row[data-empty="true"]`

#### Example Properties

```css
div.example {
    color: red;
    font: 15px Helvetica, Arial, sans-serif;
    background: #dbdbdb;
    border: solid 2px blue;
    width: 50%;
    height: 100px;
}
```

#### Cascading

All rules applicable to an element are applied to it, but if there are property conflicts then higher-priority rules are applied.

Order of priority:

1. An element's `style` attribute
2. ID
3. Classes and attributes (more matches = higher priority)
4. Element type
5. `*`, `html`, `body`
6. Browser defaults

If there's a tie for priority, the last rule defined wins.

#### References

[Mozilla - CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)