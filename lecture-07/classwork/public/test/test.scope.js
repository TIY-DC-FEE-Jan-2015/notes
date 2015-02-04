describe("Function Scope", function(){

  it("maintains the value of x", function(){

    var a = function(x) {
      x = x + 5;

      b(x);

      return x;
    };

    var b = function(x) {
      x = x + 10;

      return x;
    };

    expect( a(1) ).to.equal( 16 );
    expect( b(1) ).to.equal( 11 );

  });


  it("should modify external values not passed as params", function(){

    var steve = 10;

    var steveifier = function(delta) {

      steve = steve + delta;

    };

    steveifier(5);
    
    expect( steve ).to.equal( 15 );

  });

});

describe("Reverse Strings", function(){

  it("should reverse a single word", function(){

    expect(reverseWord("hello")).to.equal("olleh");
    expect(reverseWord("goodbye")).to.equal("eybdoog");
    expect(reverseWord("")).to.equal("");

  });

  it("should reverse all words in a sentence", function(){

    expect(reverseSentence("hello, world"))
      .to.equal(",olleh dlrow");

    expect(reverseSentence("this is a string"))
      .to.equal("siht si a gnirts");

  });

});

describe("Halving", function(){

  it("should halve a value", function(){

    expect(halve(10)).to.equal(5);
    expect(halve(5)).to.equal(2.5);
    expect(halve(20)).to.equal(10);

  });

  it("should halve every member of an array", function(){

    expect(halveArray([ 5, 6, 7 ])).to.deep.equal([ 2.5, 3, 3.5 ]);
    expect(halveArray([ 2, 4, 6, 8, 10 ])).to.deep.equal([ 1, 2, 3, 4, 5 ]);

  })

})


