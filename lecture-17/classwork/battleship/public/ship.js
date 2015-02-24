var Ship = function(size) {

  this.size = size

}

Ship.prototype.takeDamage = function() {
  this.size = this.size - 1
}