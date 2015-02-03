## JavaScript Functions

#### Elements of Functions

A **function** is a code block that can be executed on demand. 

A function can be stored in a variable, just like other values. Once defined, the code block it contains is executed by following with `variableName` with `()`.

```js
var kylesFunction = function () {
    console.log("Kyle's function executed");
}

kylesFunction();

/* Prints: 
"Kyle's function executed"
*/
```

#### Parameters

Functions *can* accept one or more **parameters** when executing. Parameters are special variables within the function, which are defined whenever the function is invoked.

```js
var paramFunction = function (param) {
    console.log("Your parameter was " + param);
}

var addFunction = function (a, b) {
    console.log(a + " + " + b + " = " + (a + b));
}

paramFunction("hello!");
addFunction(3, 4);
addFunction(10, 20);

/* Prints:
"Your parameter was hello!"
"3 + 4 = 7"
"10 + 20 = 30"
*/
```

#### `return`

All functions **return** one (and only one) value. The value that is returned can be based on the parameters that are input.

```js
var addition = function(a, b) {
  return a + b;
}

var five = function() {
  return 5; // sure, why not
}

console.log(addition(3, 4));
console.log(five());
console.log(addition(five(), 7));

/* Prints:
7
5
12
*/
```

If a function...

* does not have an explicit `return` statement, or 
* if a function simply has a `return` statement without return value, 

the return value is `undefined`.

**Important**: As soon as a function's code block execution hits a `return` statement, execution of that code block ends.

```js
var testFunction = function() {
  console.log("this prints");
  return;
  console.log("this doesn't");
}

var atLeastFive = function(x) {
    if (x > 5) {
        return x;
    }
    console.log("less than 5");
    return 5;
}

testFunction();
console.log(atLeastFive(7));
console.log(atLeastFive(2));

/* Prints:
"this prints"
7
"less than 5"
5
*/
```