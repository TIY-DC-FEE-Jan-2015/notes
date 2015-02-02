## JavaScript Intro

JavaScript is a programming language. It was invented in 1995 (in ten days, by one person) as a scripting language to be used in web browsers.

It is the most popular programming language in the world, and now operates in many places besides the browser.

**Fact:** JavaScript is completely unrelated to Java. Highlight this paragraph and show your speaker notes to the class to illustrate just how important this point is.

#### Variables

The core operation of any programming language is to execute code based on variables. Consider a box that you can store information in. Variables are information boxes with names.

Variables in JavaScript must be explicitly declared:

```js
var color;
```

Once declared, you can set (or "define") the variable's value however many times you like:

```js
color = "Blue";
color = "Red";
color = "Green";
```

Shorthand for doing both at once:

```js
var language = "JavaScript";
```

#### Naming

Variable names...

* can only contain letters, numbers, _, and $
* can't start with numbers
* are case-sensitive
* can't be one of the [reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)

When choosing a variable name that's best expressed in English with multiple words, there are two different conventions: `joining_words_with_underscores` and `joiningWordsWithCamelCase`. 

Neither is wrong. But: **choose one and stick with it.**

#### Primitives

There are three basic "types" of values in JavaScript, which are referred to as "primitives."

**Strings** are collections of characters, expressed inside of quotation marks.

```js
var hello = "Good morning, Kyle!";
```

**Numbers** are both integers and "floats" (or decimals).

```js
var positive = 5;
var negative = -20;
var float = 1.421;
```

**Booleans** are either true or false.

```js
var ironYardIsAwesome = true;
var rubyIsBetter = false;
```

Unlike some languages, JavaScript variables are **loosely typed**, so you can change a variable's type as much as you want.

```js
var x = 42;
x = "Hey, am I a string now?";
x = true;
```

#### Comments

```js
// I'm a single line comment
var hello = "world";

/*
  Multi
  line
  comment
*/
var foo = "bar";
```

#### Non-Values

A variable has not had a value set for it yet is `undefined`. Variables can specifically be set to undefined as well.

```js
var empty;

var hadAValue = true;
hadAValue = undefined;
```

There's another non-value that people use sometimes (`null`) but don't worry about that for a while.

#### Resources

* [W3C - A History of JavaScript](https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript) -- the most diplomatic way one can write a history of the first 10ish years of JS
* [The Birth and Death of JavaScript](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript) - humorous but serious talk about where the language came from and where it's going