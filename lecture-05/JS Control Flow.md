## JavaScript Control Flow

#### Code Blocks

Important definition: A **code block** is any collection of statements that is bounded by curly braces - `{` and `}`. 

(**Note:** This is kind of misstated, but it's a helpful context for understanding this lesson and the next.)

Code blocks can be nested inside of each other.

```js
{ 
  console.log("running me will just work"); 
  {
    console.log("me too!"); 
  }
}
```

There's no reason to do this unless you're attaching some precondition to the beginning of the code block.

#### `if`/`else`

The most common precondition is `if`.

```js
var kylesAge = 31;

console.log("doing something before the block");

if (kylesAge > 21) {
  console.log("execute the code inside this block");
}

console.log("doing something after the block");
```

An `else` block can be added directly after an `if` block, which is executed *if and only if* the `if` condition is not met.

```js
var kylesAge = 31;

if (kylesAge > 21) {
  console.log("specials on happy hour");
}
else {
  console.log("i'm calling your parents");
}
```

`if` and `else` blocks can be nested. An `else` block only refers to the pass/failure of it's immediate matching `if`.

```js
if (thingIsTrue) {
    if (otherThingIsTrue) {
        console.log("so many true things");
    }
    else {
        console.log("okay one true thing");
    }
}
else {
    if (otherThingIsTrue) {
        console.log("a more different true thing");
    }
    else {
        console.log("like, zero true things");
    }
}
```

#### `while`

A `while` loop will execute a code block as long as a condition is true at the end of the code block's execution.

```js
var x = 0;

console.log("before looping")

while (x < 5) {
  console.log("The value of x is " + x);
  x = x + 1;
}

console.log("done looping")

/* Prints:
"before looping"
"The value of x is 0"
"The value of x is 1"
"The value of x is 2"
"The value of x is 3"
"The value of x is 4"
"done looping"
*/
```

Be aware -- the code block will execute over, and over, and over again forever if the precondition is not met.

#### `for`

A `for` loop is a more structured way to execute a code block multiple times.

The precondition for a `for` code block takes three statements inside parentheses:

* Initial declarations and/or definitions
* End conditions to check after every iteration
* Variable changes after every iteration

In most cases, `for` blocks end up working like this:

```js
console.log("before looping")

for (var i = 0; i < 5; i++) {
    console.log("The value of i is " + i);
}

console.log("done looping")

/* Prints:
"before looping"
"The value of i is 0"
"The value of i is 1"
"The value of i is 2"
"The value of i is 3"
"The value of i is 4"
"done looping"
*/
```

Note: `variable++` is shorthand for `variable = variable + 1`.

