describe("countE", function(){

  it("should test if this is the letter E", function(){

    expect(isAnE("e")).to.equal(true);
    expect(isAnE("E")).to.equal(true);
    expect(isAnE("R")).to.equal(false);

  });

  it("should count the letter E", function(){

    expect(eCounter("hello, world")).to.equal(1);
    expect(eCounter("not in this string")).to.equal(0);
    expect(eCounter("there are many of me here")).to.equal(6);

  });

});

describe("Odd values", function(){

  it("should check for oddness", function(){

    expect(isOdd(19)).to.equal(true);
    expect(isOdd(12)).to.equal(false);

  });

  it("should count odd values", function(){

    expect(oddCounter([ 14, 17, 19, 23, 42, 56 ])).to.equal(3);
    expect(oddCounter([ 10, 20, 30, 40, 50, 60 ])).to.equal(0);
    expect(oddCounter([])).to.equal(0);

  });

});