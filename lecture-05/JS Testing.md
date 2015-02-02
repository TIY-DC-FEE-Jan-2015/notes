## JavaScript Testing

#### Test-Driven Development

Test-Driven Development is a development methodology used by many professional development teams. During the course of product development and improvement, developers build up a suite of "tests" - very simple checks to make sure that small parts of the software work like they should. 

Tests are only ever in two states: **passing** or **failing**. When any change is made to the software, all existing tests (and any new tests) must pass before considering the code ready for anyone else to use or modify. Passing tests provide confidence that the changes made by the developer aren't negatively impacting other, unrelated parts of the code base.

TDD works best in short cycles, which usually looks like this:

1. The developer that's making a change writes one or more new tests, which the functionality they're going to add or modify **will** pass.
2. They run all tests, and makes sure that existing tests are **passing**, but that their new tests are **failing**.
3. They makes their changes to the code base.
4. They re-run all tests. All of the tests should now be **passing**.
5. They create a git commit with their changes.

#### JavaScript Syntax

Writing a simple testing utility is easy -- all we're going to do is write a function that accepts a statement that's either true or false; if it's false, we'll log out an error message.

```js
function testUtility (operation, message) {
    if (operation) {
        console.log(message);
    }
}

testUtility(5 > 3, "nothing happens");
testUtility(5 < 3, "this text will display");
```

Many implementations of JavaScript (including all modern browsers) come with a tool -- `console.assert` that makes checking tests easy.

```js
// This test is passing, so
console.assert(5 > 3, "nothing happens");

// This test will fail, so
console.assert(5 < 3, "this text will display");
```

#### Advanced Tools

During our course, we're going to use some more advanced testing tools that provide more options and methods.

**Chai** is an assertion library that lets you test for more things, quickly. Instead of just "is this thing equal to that" or "is this thing true", you have additional methods available and a more verbose, readable syntax.

**Mocha** is an automated, very fast test runner that listens for libraries like Chai. It can report its results in a bunch of different, useful formats that can integrate with other tools we'll learn later.

#### Additional Resources

* [Mocha](http://mochajs.org/)
* [Chai](http://chaijs.com/api/bdd/)