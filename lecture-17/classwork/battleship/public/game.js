var Game = function() {

  this.ships = []

}

Game.prototype.start = function() {

  this.ships = [
    new Ship(2),
    new Ship(3),
    new Ship(4),
    new Ship(5)
  ]

}

Game.prototype.hit = function(ship) {

  var damageFunction = function() {
    this.takeDamage()
  }

  damageFunction.call(ship)

}

