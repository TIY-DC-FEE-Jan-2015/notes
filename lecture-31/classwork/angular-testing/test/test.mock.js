describe("MockModule Suite", function(){

  beforeEach(module("mockModule"))

  describe("MockFactory", function(){

    var factory

    beforeEach(inject(function(_MockFactory_){
      factory = _MockFactory_
    }))

    it("should be an object", function(){
      
      expect(factory).to.be.an("object")

    })

    it("should have a cypher method", function(){

      expect(factory.cypher).to.be.a("function")

    })

    it("should rotate the cypher string by X positions", function(){

      expect(factory.cypher()).to.equal("")
      expect(factory.cypher(undefined, 5)).to.equal("")
      expect(factory.cypher("abcde", 1)).to.equal("bcdef")
      expect(factory.cypher("abcde", 5)).to.equal("fghij")

    })

  })

  describe("MockController", function(){

    var scope, ctrl

    beforeEach(inject(function($rootScope, $controller, _MockFactory_){
      scope = $rootScope.$new()
      
      ctrl = $controller("MockController", {
        $scope: scope,
        MockFactory: _MockFactory_
      })
    }))

    it("should be a controller", function(){

      expect(scope).to.be.an("object")

    })

    it("should have a resetOutput method", function(){

      expect(scope.resetOutput).to.be.a("function")

    })

    it("should execute the resetOutput method correctly", function(){

      scope.input = "abcde"
      scope.resetOutput()

      expect(scope.output).to.equal("fghij")

    })

  })

  describe("mockFilter", function(){

    var filter

    beforeEach(inject(function($filter){
      filter = $filter("mockFilter")
    }))

    it("should be a filter", function(){

      expect(filter).to.be.a("function")

    })

    it("should reverse text", function(){

      expect(filter("abcde")).to.equal("edcba")
      expect(filter()).to.equal("")

    })

  })
  
})