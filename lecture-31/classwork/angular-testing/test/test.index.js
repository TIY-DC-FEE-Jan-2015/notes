describe("test", function(){

  it("should look like this", function(){

    expect(1 === 1).to.equal(true)

  })

})

describe("controller", function(){

  beforeEach(module("testApp"))

  var scope, ctrl

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new()
    ctrl = $controller("TestController", { $scope: scope })
  }))

  it("should access the module", function(){
    
    expect(scope.check()).to.equal("1,2")
    expect(scope.prop).to.equal("heck yeah")

  })

})

describe("factory", function(){

  beforeEach(module("testApp"))

  var factory, $log

  beforeEach(inject(function(_TestFactory_, _$log_){
    factory = _TestFactory_;
    $log = _$log_;
    
    sinon.stub($log, 'log', function() {});
  }))

  beforeEach(function(){
    factory.fn("test")
    factory.fn("other test")
  })

  it("should access the factory", function(){
    expect($log.log.callCount).to.equal(2);
    expect($log.log.args[0][0]).to.equal('test');
    expect($log.log.args[1][0]).to.equal('other test');

    expect(factory.counter()).to.equal(2)
  })

})