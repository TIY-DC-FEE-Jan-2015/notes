describe("Task Item", function(){
  
  it("default attributes", function(){
    var t = new Task()

    expect(t.get("complete")).to.equal(false)
    expect(t.get("value")).to.equal(0)
    expect(t.get("task")).to.equal("Unknown")

    t = new Task({
      complete: true,
      value: 5,
      task: "provided"
    })

    expect(t.get("complete")).to.equal(true)
    expect(t.get("value")).to.equal(5)
    expect(t.get("task")).to.equal("provided")
  })

  it(".completed()", function(){
    var t = new Task()

    expect(t.completed()).to.equal(false)

    t = new Task({ complete: true })

    expect(t.completed()).to.equal(true)
  })

  it(".check()", function(){
    var t = new Task({
      complete: true
    })
    expect(t.get("complete")).to.equal(true)   

    t.check()
    expect(t.get("complete")).to.equal(false)   

    t.check()
    expect(t.get("complete")).to.equal(true)   
  })

  it(".update()", function(){
    var t = new Task({
      value: 5,
      task: "temporary"
    })

    expect(t.get("value")).to.equal(5)
    expect(t.get("task")).to.equal("temporary")

    t.update("New Task Name", 10)

    expect(t.get("value")).to.equal(10)
    expect(t.get("task")).to.equal("New Task Name")
  })

})