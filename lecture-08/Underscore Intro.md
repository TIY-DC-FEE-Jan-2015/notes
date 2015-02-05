## Underscore.js Intro

#### Fundamentals

Underscore is a very popular JavaScript programming library that provides preconstructed, efficient implementations of many features that often come standard in more modern programming languages. 

The interface for using Underscore takes the form of an object stored in the variable `_` (hence the name). Most often you'll use the format `_.methodName()`, passing in the object or array as the first variable and some function to execute as a second variable.

The complete list of methods is [here](http://underscorejs.org/), and is totally worth reading through regardless of anything else.

#### Functional Programming

Underscore contains methods for all of the primary functional programming patterns - `_.map`, `_.reduce`, `_.filter`.

```js
var doubler = function(value, index) { 
    return value * 2; 
}
var sum = function(mem, value, index) {
    return mem + value;
}

var array = [1, 2, 3, 4];

var doubledArray = _.map(array, doubler);
var sumOfArray = _.reduce(array, sum, 0);

console.log(doubledArray); // [2, 4, 6, 8]
console.log(sumOfArray); // 10
```

Underscore also contains methods like `_.find` and `_.sort` and `_.contains` which adapt the standard functional programming patterns for more common usage; they're just syntactic sugar for those existing patterns, but helpful if you want to write code quickly and readably.

```js
var sortAscending = function(value, index) {
    return value;
}
var sortDescending = function(value, index) {
    return value * -1;
}

var array = [15, 39, 8, 52, 26];

var sortUp = _.sortBy(array, sortAscending);
var sortDown = _.sortBy(array, sortDescending);

console.log(sortUp); // [ 8, 15, 26, 39, 52 ]
console.log(sortDown); // [ 52, 39, 26, 15, 8 ]
```

Underscore functional programming confers two primary benefits:

* It works in older browsers that may be incorrect or inefficient implementations of native functional programming methods, and
* **It works on objects, too!**

```js
var sumObjectValues = function(memory, value, key) {
    return memory + value;
}
var getObjectKeys = function(memory, value, key) {
    memory.push(key);
    return memory;
}

var object = { a: 10, b: 5, c: 15 };

var sum = _.reduce(object, sumObjectValues, 0);
var keys = _.reduce(object, getObjectKeys, []);

console.log(sum); // 30
console.log(keys); // ["a", "b", "c"]
```

#### Utilities

Underscore also contains a whole slew of useful methods that replicate common tasks.

Highlights include

* Extending objects (`_.extend`)
* Shuffling the contents of an array (`_.shuffle`)
* Combining multiple arrays in various formats (`_.zip`)
* Preventing functions from being executed too often (`_.throttle`, `_.once`)
* Testing the type of a value (`_.isString`, `_.isObject`, etc.)

Check out the API for inspiration.

#### Additional Resources

* [Underscore.js](http://underscorejs.org/)
* [Underscore Annotated Source](http://underscorejs.org/docs/underscore.html)
* [Lodash](https://lodash.com/) -- alternative utility library that (usually) delivers similar functionality with speed improvements