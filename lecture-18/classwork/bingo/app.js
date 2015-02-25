var express = require('express');
var exphbs = require("express-handlebars")

var path = require("path")

var u = require("underscore")

var app = express();
app.engine("handlebars", exphbs())
app.set("view engine", "handlebars")

var createBingoCardObject = function() {

  var data = {}
  data.rows = []

  var b = u.shuffle(u.range(1, 16))
  var i = u.shuffle(u.range(16, 31))
  var n = u.shuffle(u.range(31, 46))
  var g = u.shuffle(u.range(46, 61))
  var o = u.shuffle(u.range(61, 76))

  u(5).times(function(){

    var row = {
      g: g.pop(),
      n: n.pop(),
      b: b.pop(),
      o: o.pop(),
      i: i.pop()
    }
    
    data.rows.push(row)

  })

  data.rows[2].hasFree = true

  console.log(data)

  return data

}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index', createBingoCardObject());
});

exports = module.exports = app