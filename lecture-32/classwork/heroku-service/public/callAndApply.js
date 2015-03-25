var obj = {
  a: 3,
  b: function(multiply, add) {
    return (this.a * multiply) + add
  }
}

var a = 2;
var b = function(add, multiply) {
  window.foo = arguments
  return (this.a * multiply) + add
}