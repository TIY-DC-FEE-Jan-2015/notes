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
      expect(b.times()).to.equal(0)

    })

    it("should increment", function(){

      b.name()
      b.secret()

      expect(b.times()).to.equal(2)

    })
    
  })

  it("has a name method", function(){

    expect(b.name).to.be.a("function")
    expect(b.name()).to.equal("foo")

  })

  it("has a secret method", function(){

    expect(b.secret).to.be.a("function")
    expect(b.secret()).to.equal("steve")

  })

})