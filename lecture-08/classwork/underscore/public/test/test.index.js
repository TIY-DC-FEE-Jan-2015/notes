describe("Underscore", function(){

  it("should allow us to use max", function(){

    var arrayOfObjects = [
      { name: "Greg", value: 19 },
      { name: "Aaron", value: 22 },
      { name: "Autumn", value: 20 },
      { name: "Josh", value: 15 },
      { name: "John", value: 3 }
    ]

    var getObjectValue = function(item) {
      return item.value;
    }

    expect(_.max(arrayOfObjects, getObjectValue)).to.deep.equal({
      name: "Aaron", value: 22
    })

  });

  it("should allow us to use find", function(){

    var array = [ 12, 19, 25, 17, 34, 6, 10, 77 ];

    var isMultipleOf5 = function(number) {
      return (number % 5 === 0)
    }

    expect(_.filter(array, isMultipleOf5)).to.deep.equal([25, 10])
    expect(_.find(array, isMultipleOf5)).to.deep.equal(25)

  });

  it("should allow us to use groupBy", function(){

    var string = "this is a very long sentence that has several words and I am typing for a while";
    var array = string.split(" ");

    var firstLetter = function(word) {
      return word[0];
    }

    var wordLength = function(word) {
      return word.length;
    }

    expect((_.groupBy(array, firstLetter))["t"].length).to.equal(3)
    expect((_.groupBy(array, wordLength))["4"].length).to.equal(4)
    expect((_.groupBy(array, wordLength))["5"].length).to.equal(2)

  });

  it("should allow us to use map", function(){

    var array = [ 20, 16, 37, 53, 12 ];
    var doubler = function(value) {
      return value * 2;
    }

    expect(_.map(array, doubler)).to.deep.equal([40, 32, 74, 106, 24]);
    expect(array.map(doubler)).to.deep.equal([40, 32, 74, 106, 24]);

  })

  it("should let us map objects", function(){

    var doubler = function(value) {
      return value * 2;
    }

    var obj = {
      c: 30,
      b: 20,
      a: 10
    }

    var mappedObject = _.map(obj, doubler);

    var sortedMappedObject = _.sortBy(mappedObject, function(i){ return i });

    expect(sortedMappedObject).to.deep.equal([20, 40, 60]);

  })

})