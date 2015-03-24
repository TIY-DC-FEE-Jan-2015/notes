describe("BlackBox", function(){

  var b;

  beforeEach(function(){

    b = new BlackBox("foo")

  })

  it("is a Constructor", function(){

    expect(b).to.be.a("object")

  })

  describe(".times", function(){


    it("should be a function", function(){
    
      expect(b.times).to.be.a("function")

    })

    it("should start at 0", function(){

      expect(b.times()).to.equal(0)

    })

    it("should increment", function(){

      b.boxName()
      b.secret()

      expect(b.times()).to.equal(2)

    })
    
  })

  describe(".boxName", function(){

    it("is a method", function(){

      expect(b.boxName).to.be.a("function")
      
    })

    it("returns the parameter name", function(){

      expect(b.boxName()).to.equal("foo")

    })

    it("returns empty string if name is undefined", function(){

      var x = new BlackBox()
      expect(x.boxName()).to.equal("")

    })

  })

  
  it("has a secret method", function(){

    expect(b.secret).to.be.a("function")
    expect(b.secret()).to.equal("steve")

  })

  describe(".publicVariable", function(){

    it("is a function", function(){

      expect(b.publicVariable).to.be.a("function")

    })

    it("returns 42", function(){

      expect(b.publicVariable()).to.equal(42)

    })

  })

})