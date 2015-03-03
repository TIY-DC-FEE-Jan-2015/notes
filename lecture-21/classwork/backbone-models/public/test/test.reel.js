describe("Slot Machine Reel", function(){
  
  it("default attributes", function(){
    var r = new Reel()

    expect(r.get("blankRate")).to.equal(.5)
    expect(r.get("symbols")).to.have.length(6)

    r = new Reel({
      blankRate: .2,
      symbols: ["Cat", "Dog", "Horse"]
    })

    expect(r.get("blankRate")).to.equal(.2)
    expect(r.get("symbols")).to.have.length(3)
  })

  it("initialize()", function(){
    var r = new Reel()

    expect(r.spinning).to.equal(false)
    expect(r.result).to.equal("")

    r = new Reel({
      spinning: true,
      result: "meh"
    })

    expect(r.spinning).to.equal(false)
    expect(r.result).to.equal("")
  })

  it(".getResult()", function(){
    var r = new Reel()
    var counter = {}, res;

    for (var i = 0; i < 1000; i++) {
      var res = r.getResult()

      counter[res] = (counter[res] + 1) || 1
    }

    expect(_.keys(counter).length).to.equal(7)
  })

  it(".spin()", function(){
    var r = new Reel()
    expect(r.spinning).to.equal(false)

    r.spin()
    expect(r.spinning).to.equal(true)
  })

  it(".stopSpinning()", function(){
    var r = new Reel()
    expect(r.spinning).to.equal(false)

    r.spinning = true
    r.stopSpinning()
    expect(r.spinning).to.equal(false)
  })

  it(".display()", function(){
    var r = new Reel()
    expect(r.display()).to.equal("")

    r.spinning = true
    expect(r.display()).to.equal(false)
  })

  it("events", function(done){
    var r = new Reel()

    r.trigger("spin")
    expect(r.spinning).to.equal(true)

    r.on("stopped", function(){
      expect(this.spinning).to.equal(false)
      done()
    })

    r.trigger("stop")
  })

})