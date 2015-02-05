describe("lets talk about reduce", function(){

  it("should have a reduce-ish function", function(){

    var array = [ 1, 2, 3, 4, 5 ]

    expect(genericReduce(array, sum, 0)).to.deep.equal(15)
    expect(genericReduce(array, sumOdd, 0)).to.deep.equal(9)

    expect(genericReduce(array, sum, 100)).to.deep.equal(115)

    expect(genericReduce(array, subtract, 50)).to.deep.equal(35)
  });

  it("should recreate a reduce method", function(){

    expect(sumArray([1, 2, 3, 4, 5])).to.deep.equal(15)
    expect(sumOddsOfArray([1, 2, 3, 4, 5])).to.deep.equal(9)

  })

})

describe("lets talk about filter", function(){

  it("should have a filter-ish function", function(){

    var array = [1, 12, 17, 9, 20, 5];

    expect(genericFilter(array, isEven)).to.deep.equal([12, 20]);
    expect(genericFilter(array, itemIsBig)).to.deep.equal([12, 17, 20]);
  });

  it("should recreate a filter method", function(){

    expect(evensOnly([1, 2, 3, 4, 5])).to.deep.equal([2, 4])

    expect(greaterThan10([5, 20, 17, 4, 26])).to.deep.equal([20, 17, 26])

  });

});

describe("lets actually use FP", function(){

  it("should implement map", function(){

    expect(addARingToIt([ "this", "is", "a", "sentence" ]))
      .to.deep.equal([ "thisring", "isring", "aring", "sentencering" ])

  })

})

describe("oh snap it's the fp", function(){

  it("should accept a function and execute it on each member of an array", function(){

    var quadrifier = function(item) {
      return item * 4;
    }

    var quintifier = function(item) {
      return item * 5;
    }

    expect(arrayTransmodificator([1, 2, 3, 4, 5], doubleItem)).to.deep.equal([2, 4, 6, 8, 10]);
    expect(arrayTransmodificator([1, 2, 3, 4, 5], tripleItem)).to.deep.equal([3, 6, 9, 12, 15]);

    expect(arrayTransmodificator([1, 2, 3, 4, 5], quadrifier)).to.deep.equal([4, 8, 12, 16, 20]);
    expect(arrayTransmodificator([1, 2, 3, 4, 5], quintifier)).to.deep.equal([5, 10, 15, 20, 25]);
  })

});


describe("Functional Programming 'Ah-ha' Illustration Moment", function(){

  it("should have double each value", function(){

    expect(doubler([10, 20, 30])).to.deep.equal([20, 40, 60])

  })

  it("should have triple each value", function(){

    expect(tripler([10, 20, 30])).to.deep.equal([30, 60, 90])

  })


})