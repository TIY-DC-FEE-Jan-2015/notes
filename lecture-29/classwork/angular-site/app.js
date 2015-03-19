var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

var americaData = {
  section: "BBC America",
  title: "'Broadchurch': free season premiere",
  image: "http://ichef.bbci.co.uk/wwhp/ic/bbc-america/336-189/files/2014/12/broadchurch-2-hp.jpg",
  links: [
    {
      url: "http://www.bbcamerica.com/schedule/?utm_source=bbc.com&utm_medium=promo%20module&utm_campaign=Channel%20Module",
      text: "Full Schedule"
    },
    {
      url: "http://www.bbcamerica.com/channel-finder/?utm_source=bbc.com&utm_medium=promo%20module&utm_campaign=Channel%20Module",
      text: "Channel Finder"
    }
  ]
}

var worldData = {
  section: "BBC World News",
  title: "Click",
  subtitle: "The 3D printed prototype which could make surgical stitching easier and safer",
  image: "http://ichef.bbci.co.uk/wwhp/336-189/mcs/media/images/81696000/jpg/_81696969_sutrue1024.jpg",
  subsection: {
    image: "http://ichef.bbci.co.uk/images/ic/336x189/p014bdwr.jpg",
    title: "On Air",
    text: "World Business Report"
  },
  links: [
    {
      text: "Full Schedule",
      url: "http://www.bbc.co.uk/worldnews/programmes/schedules/northamerica"
    }
  ]
}

app.get("/api/america", function(req, res){
  res.json(americaData)
})

app.get("/api/world", function(req, res){
  res.json(worldData)
})

module.exports = app;
