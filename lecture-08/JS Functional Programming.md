## Functional Programming

#### Fundamentals

**Functional programming** is the name given to the concept of calling a generic *iterator* function with each member in a collection, and producing a result consistent with a standard programming paradigm.

At least once you grok it, functional programming is super-easy in JavaScript, since JS will treat functions like any other variable, and so they can be easily passed as a parameter to another function.

#### Patterns

Pretty much everything in functional programming can be distilled down to one of three patterns, which can be recognized by their purpose and by their output.

* `map`: Takes in an array. Returns an array with each item from the original array transformed somehow.

* `filter`: Takes in an array. Returns an array of equal or shorter length, containing a specific subset of items.

* `reduce`: Takes in an array. Returns a single value that synthesizes all values in the array.

Let's discuss each in detail.

#### `map`

Mapping is useful for **transforming** the members of an array.

Map iterator functions have the parameter signature of `function(value, index)`.

```js
var doubler = function(value, index) {
    return value * 2;
}
var squarer = function(value, index) {
    return value * value;
}

var array = [1, 2, 3, 4];

var doubledArray = array.map(doubler);
var squaredArray = array.map(squarer);

console.log(doubledArray); // [ 2, 4, 6, 8 ]
console.log(squaredArray); // [ 1, 4, 9, 16 ]
```

#### `filter`

Filtering is useful for, well, **filtering** the members of an array into a specific subset.

Like map, filter iterator functions have the parameter signature of `function(value, index)`.

```js
var odds = function(value, index) {
    return (value % 2 == 1);
}
var greaterThan2 = function(value, index) {
    return (value > 2);
}

var array = [1, 2, 3, 4];

var oddArray = array.filter(odds);
var greaterThanArray = array.filter(greaterThan2);

console.log(oddArray); // [ 1, 3 ]
console.log(greaterThanArray); // [ 3, 4 ]
```

#### `reduce`

Reducing is useful for **distilling** information from the members of an array into a single value.

Unlike map and filter, reduce functions require another value when being called -- the seed value that the memory starts at.

Reduce iterator functions have the parameter signature of `function(memory, value, index)`.

```js
var joinAsString = function(memory, value, index) {
    return memory + ", " + value;
}
var sum = function(memory, value, index) {
    return memory + value;
}

var array = [1, 2, 3, 4];

var stringOfArray = array.reduce(joinAsString, "");
var sumOfArray = array.reduce(sum, 0);

console.log(stringOfArray); // "1, 2, 3, 4, "
console.log(sumOfArray); // 10
```

