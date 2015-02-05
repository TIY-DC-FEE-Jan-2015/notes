describe("Has a test property", function(){

  it("should only include objects with property 'test'", function(){

    var arrayOfObjects = [
      { name: "Kyle", value: 19 },
      { name: "James", value: 42, test: true },
      { name: "Su", value: 8, test: true },
      { name: "Katherine", value: 26 }
    ]

    var genericFunction = function(object) {
      if (object["test"] === undefined) {
        return false;
      }

      return true;
    }

    expect(arrayOfObjects.filter(genericFunction))
      .to.deep.equal([
        { name: "James", value: 42, test: true },
        { name: "Su", value: 8, test: true },
      ])


    var arrayOfNumbers = [ 1, 2, 3, 4, 5 ]

    var genericFunction2 = function(number) {
      if (number % 2 === 0) {
        return true
      }

      return false
    }

    expect(arrayOfNumbers.filter(genericFunction2))
      .to.deep.equal([2, 4]);

    expect(arrayOfNumbers.filter(genericFunction2))["to"]["deep"]["equal"]([2, 4]);

  })

});


describe("Divide everything in half", function(){

  it("should divide everything in half", function(){

    var genericFunction = function(value) {
      console.log("generic Map arguments:", arguments)

      return value / 2;
    }

    expect([10, 20, 30].map(genericFunction)).to.deep.equal([5, 10, 15]);

  });

});

describe("Maximum of array", function(){

  it("should get the maximum", function(){

    var genericFunction = function(memory, value) {
      if (memory > value) {
        return memory;
      }

      return value;
    }

    var array = [13, 45, 10, 9, 34, 16]
    var startMemory = array[0];

    expect(array.reduce(genericFunction, startMemory))
      .to.equal(45);

  });

});