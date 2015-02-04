describe("Object Iteration", function(){

  it("should get all keys", function(){

    var testObject = {
      a: 1,
      elephant: "gray",
      array: [ "is", "an", "array" ],
      object: {
        permanence: true
      }
    };

    expect(keys(testObject)).to.include.members(["a", "array", "elephant", "object"]);

  });

  it("should get all values", function(){

    var testObject = {
      a: 1,
      elephant: "gray",
      array: [ "is", "an", "array" ],
      object: {
        permanence: true
      }
    };

    expect(values(testObject).length).to.equal(4);

  });

  it("should get the 'test' property", function(){

    var testObject = {
      a: 1,
      b: 2,
      test: 3,
      c: 4
    };

    expect(getTestValue(testObject)).to.equal(3);

  });


  it("should tell us distinct properties in objects", function(){

    var obj1 = { a: 1, b: 2, c: 3 };
    var obj2 = { c: 3, d: 4, e: 5 };

    expect(keyUniqueifier(obj1, obj2)).to.include.members(["a", "b", "c", "d", "e"])
    expect(keyUniqueifier(obj1, obj2).length).to.equal(5);

  });

  it("should extend objects", function(){

    var obj1 = { a: 1, b: 2, c: 3 };
    var obj2 = { c: 10, d: 20, e: 30 };

    expect(larry(obj1, obj2)).to.deep.equal({
      a: 1,
      b: 2,
      c: 3,
      d: 20,
      e: 30
    });

  });
});