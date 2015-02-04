## JavaScript Data Structures

Besides numbers, strings, booleans, the non-values, and functions, there are two additional native JavaScript **types**.

#### Arrays

Arrays are indexed collections of variables, all stored inside a single variable. Arrays are bounded by `[` and `]`, and individual values inside of arrays are comma-delimited.

```js
var numbers = [1, 2, 3, 4]
```

The values inside of an array can be of any type (including arrays).

```js
var randomStuff = [
  "string", 
  42, 
  true, 
  function() { return "hello, world!" },
  ["a", "b", "c"]  
];
```

In JavaScript, arrays are **zero-indexed** -- meaning the first element is at index 0, the second is at index 1...

To access a specific value from within an array:

```js
// using randomStuff array above

console.log(randomStuff[0]); // "string"
console.log(randomStuff[1]); // 42
console.log(randomStuff[3]()); // "hello, world!"
console.log(randomStuff[4][2]); // "c"

// Array values can be changed
randomStuff[2] = false;

console.log(randomStuff); // entire contents of array
```

Every array has a built in property - `length`.

Some built-in functions that can be performed on any array:

* `push` - adds value to **right**
* `pop` - remove value from **right**, returns that value
* `unshift` - adds value to **left**
* `shift` - remove value from **left**, returns that value
* `reverse` - reverses array members

```js
var testArray = [ "a", "b", "c" ];

console.log(testArray.length); // 3

testArray.push("d");
console.log(testArray); // [ "a", "b", "c", "d" ]

console.log(testArray.pop()); // "d"
console.log(testArray); // [ "a", "b", "c" ]

console.log(testArray.shift()); // "a"
console.log(testArray); // [ "b", "c" ]

testArray.unshift("e");
console.log(testArray); // [ "e", "b", "c" ]

testArray.reverse();
console.log(testArray); // [ "c", "b", "e" ]

// Use a loop to iterate over the items in an array
for (var x = 0; x < testArray.length; x++) {
    console.log(testArray[x]);
}

/* Prints:
"c"
"b"
"e"
*/

```

#### Objects

Objects are named collections of variables, all stored inside a single variable. Objects are bounded by `{` and `}`. Individual values inside of objects are comma-delimited, and given distinct names within the object; the names must be strings or numbers, and definition occurs with `:`.

```js
var myObject = {
    someProperty: "someValue",
    someOtherProperty: [1, 2, 3]
};
```

JavaScript objects are **mutable**, which means that after being created, properties can be added, removed, and edited at will. To interact with an object:

```js
var testObject = {
    first: "hello",
    second: "world"
};

// Dot notation works fine
console.log(testObject.first); // "hello"

// So does bracket notation
console.log(testObject["second"]); // "world"

// Properties can be changed
testObject.first = "hola";
testObject["second"] = "mundial";

// Properties can be added
testObject.third = "muchachos";

// Use a loop to iterate over the properties in an object
// Note different syntax

for (var x in testObject) {
    console.log(x + " : " + testObject[x]);
}
/* Prints (in unpredictable order):
"first : hola"
"second : mundial"
"third : muchachos"
*/
```

Like with arrays, object properties can be any types of values, including arrays and other objects.

#### Comprehension

Arrays and objects, while acting similar, serve different purposes.

Arrays:

* are for containing lists of items
* do not have named properties
* maintain order

Object:

* are for containing collections of disparate information
* have named properties
* do **not** maintain order