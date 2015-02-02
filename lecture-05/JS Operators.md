## JavaScript Operators

#### Expression

In JavaScript, an **expression** is a collection of **operators** inside of a statement.

Variables can contain the results of an expression, and be used inside of expressions.
"5"
```js
var kylesAge = 2015 - 1984;

var canKyleDrinkLegally = myAge > 21;

var canKyleRetireYet = myAge > 65;

var greeting = "My name is Kyle and I am " + kylesAge + " years old";
```

#### Math Operators

When working with strings, you can use `+` to concatenate two strings.

When working with numbers, you have access to the four main mathematical operations - `+`, `-`, `*`, and `/`. You also have access to `%` ("modulus"), which returns the whole number remainder of any division operation

```js
var addition = 2 + 3; // 5
var subtraction = 10 - 3; // 7
var multiplication = 2.5 * 5; // 12.5
var division = 7 / 2; // 3.5

var mod2 = 5 % 3; // 2
var mod0 = 6 % 3; // 0
```

In an expression, any elements inside of parentheses will be executed first.

```js
var withoutParens = 100 - 5 * 6 + 2; // 72

/*
When unclear, JS follows mathematical 
"order of operations", so:

5 * 6 = 30,
100 - 30 = 70, and then
70 + 2 = 72
*/

var parens = 100 - (5 * (6 + 2)); // 60

/*
Much clearer and more readable:

6 + 2 = 8,
5 * 8 = 40, and then
100 - 40 = 60
*/
```

#### Equality Operators

`===` ("triple equals") compares two values without "type coercion". 

`==` ("double equals") compares two values while attempting type coercion.

```js
42 === "42" // false
42 == "42" // true
42 == "41" // false
```

`!==` and `!=` are the negative check for value equality comparison; `!==` does not attempt type coercion.

```js
42 !== "42" // true
42 != "42" // false
42 != "41" // true
```

During this class, **please do not use the type coercion operators**. Stick to `===` and `!==`. It's best practice anyway.

* `>` - greater than
* `>=` - greater than, or equal to
* `<` - less than
* `<=` - less than, or equal to

#### Truthiness

Yes, it's a real thing. Welcome to JavaScript!

The following values are considered by JS to be **falsy**:

* `undefined`
* `""` (empty string)
* `0`
* `false`
* `null`
* `NaN` ("not a number", the result of many math errors)

**All other values are truthy.**

Truthiness is relevant for a few things, but specifically for fulfilling or failing preconditions on code blocks.

```js
var truthyValue = "some non-boolean value";
var falsyValue = 0;

if (truthyValue) {
    // this code block WILL execute
}

if (falsyValue) {
    // this code block will not execute
}
else {
    // this code block will execute instead
}
```

#### Logical Operators

* `!` - "Not"; Returns the **negative** of whether or not the argument is truthy.

```js
var x = 42;
var y = !x; // false
var z = !y; // true

var a = "";
var b = !a; // true
var c = !b; // false
```

* `&&` - "And"; If the first argument is truthy, returns the second one. Otherwise, returns the first.

```js
var p = "something true-ish";
var q = 26;
var r = (p && q); // 26

var l = 0;
var m = true;
var n = (l && m); // 0
```

* `||` - "Or"; If the first argument is not truthy, returns the second one. Otherwise, returns the first.

```js
var p = "something true-ish";
var q = 26;
var r = (p || q); // "something true-ish"

var l = 0;
var m = true;
var n = (l && m); // true
```

