describe("Beeramid", function(){

  it("should have a number of cans function", function(){

    expect(numberOfCans(30, 2)).to.equal(15);
    expect(numberOfCans(24, 1.50)).to.equal(16);
    expect(numberOfCans(25, 2)).to.equal(12);

  });

  it("should have a cans in this level function", function(){

    expect(cansInLevel(1)).to.equal(1);
    expect(cansInLevel(2)).to.equal(4);
    expect(cansInLevel(3)).to.equal(9);
    expect(cansInLevel(5)).to.equal(25);

  });

  it("should have the beeramid function", function(){

    expect(beeramid(32, 2)).to.equal(3);
    expect(beeramid(3, 4)).to.equal(0);
    expect(beeramid(25, 2)).to.equal(2);
    expect(beeramid(14, 1)).to.equal(3);
    expect(beeramid(17543.25, 2)).to.equal(29);

  });

});