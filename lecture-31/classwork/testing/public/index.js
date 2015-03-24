var BlackBox = function(name) {

  var timesCalled = 0

  var secretVariable = "steve"

  this.publicVariable = function() {
    return 42
  }

  this.boxName = function() {
    timesCalled++

    if (name === undefined) {
      return ""
    }

    return name
  }

  this.times = function() {
    return timesCalled
  }

  this.secret = function() {
    timesCalled++
    return secretVariable
  }

}
