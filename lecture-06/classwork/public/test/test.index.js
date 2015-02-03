describe("Fibonnaci Numbers", function(){
  
  it("should calculate correctly", function(){

    expect(fibonnaci(1)).to.equal(1);
    expect(fibonnaci(3)).to.equal(2);
    expect(fibonnaci(6)).to.equal(8);

  });

});

describe("Round To Nearest Ten", function(){

  it("should round to nearest ten", function(){

    expect(roundToTen(57)).to.equal(60);
    expect(roundToTen(33)).to.equal(30);
    expect(roundToTen(20)).to.equal(20);
    expect(roundToTen(25)).to.equal(30);
    

  });

  it("should work for negative numbers", function(){

    expect(roundToTen(-17)).to.equal(-20);
    expect(roundToTen(-33)).to.equal(-30);
    expect(roundToTen(-35)).to.equal(-30);

  });

});

describe("Multiply Odd, Divide Even", function(){

  it("should multiply odd", function(){
    expect(mode(11, 3)).to.equal(33);
    expect(mode(3, 4)).to.equal(12);
    expect(mode(5, 1)).to.equal(5);
  });

  it("should divide even", function(){
    expect(mode(8, 2)).to.equal(4);
    expect(mode(12, 6)).to.equal(2);
    expect(mode(14, 5)).to.equal(2.8);
  });

});