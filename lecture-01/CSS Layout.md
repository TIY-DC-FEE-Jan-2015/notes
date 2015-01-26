## CSS Layout

#### Box Model

Remember: Every element is encapsulated by a rectangular box.

Some Box Model properties:

* `margin`
* `padding`
* `height` - also, `max-height` and `min-height`
* `width`
* `border-radius`

Specified `width`s only apply to content, and do not include `margin`, `padding`, or `border` width, so precise positioning and sizing content can be difficult and/or mathy.

Consider using `box-sizing: border-box;`, as the specified width will include `margin`, `padding`, and `border` and the content.

#### `display`

Determines how an element is drawn on a page, and how it affects other elements after it.

By far the four most common values for `display`:

* `none` - Element is entirely removed from the flow; other content rendered as if the tag isn't there.
* `block` - Element is rendered as a block -- accepts box model properties and fills all available width. Inline content can't start on the same line.
* `inline` - Element is rendered inline like text. Does not accept box model properties.
* `inline-block` - Element is rendered inline, but accepts box model properties and does not word wrap within larger inline blocks.

Different elements have different default styling (`block` or `inline`), but that can be changed at the element or class level.

#### `position`

Determines how the element is drawn *relative to other elements*. The only possible values are:

* `static` - Default value. Nothing special; element is drawn in the flow like normal. If an element has any other value for `position`, it is referred to as "**positioned**."
* `fixed` - Draw the element on screen without moving (imagine it's stuck to the camera lens). This element is removed from the flow of how other elements are placed.
* `absolute` - Draw the element at a specific point *within the nearest positioned ancestor element*. (Default is top left.) This element is removed from the flow of how other elements are placed.
* `relative` - This element is **not** removed from the flow of how other elements are placed, but can be adjusted *from where it would otherwise be* using the positioning properties, and is considered positioned for the sake of any child `position:absolute` elements.

If an element is "positioned", the following properties will work to specifically place it:

* `top`
* `bottom`
* `left`
* `right`

#### `float`

An alternate way to determine how an element is drawn relative to other elements. The possible values are:

* `none` - Default, doesn't float
* `left` - This element is removed from the flow and drawn along the left side of its container. Elements following this are drawn *around* this element.
* `right` - Same thing, other side.

Unlike `position:absolute`, floated elements are drawn in a separate layer, so that two consecutive elements with `float:left` will be drawn adjacent to one another.

Use `clear:both` on an element to establish a new float layer after it.

#### References

* [Learn Layout](http://learnlayout.com/)
* [Mozilla - CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
* [Mozilla - CSS position property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)