var views = {}
var templates = {}

var Router = Backbone.Router.extend({

  routes: {
    "": "showStandings",
    "team/:name": "showTeam",
    "result": "inputResult"
  },

  showStandings: function() {
    $.ajax({
      url: "/api/standings",
      method: "GET",
      success: function(data) {
        views.standings.update(data)
        $("#content").html( views.standings.$el )
      }
    })
  },

  showTeam: function(name) {
    $.ajax({
      url: "/api/team/" + name,
      method: "GET",
      success: function(data) {
        views.team.update(data)
        $("#content").html( views.team.$el )
      }
    })
  },

  inputResult: function(){
    $("#content").html( views.addResult.$el )
  }

})
var router = new Router()


var StandingsView = Backbone.View.extend({

  initialize: function() {
    this.data = []
    this.render()
  },

  render: function() {
    console.log("this.data", this.data)
    this.$el.html( templates.standings(this.data) )
  },

  update: function(data) {
    this.data = data
    this.render()
  }

})

var TeamView = Backbone.View.extend({

  initialize: function() {
    this.data = {}
    this.render
  },

  render: function() {
    console.log("team view this.data", this.data)
    this.$el.html( templates.team(this.data) )
  },

  update: function(data) {
    this.data = data
    this.render()
  }

})

var AddResultView = Backbone.View.extend({

  events: {
    "click .add-button": "addResult"
  },

  initialize: function() {
    this.render()
  },

  render: function() {
    this.$el.html( templates.addResult() )
  },

  addResult: function() {
    var winner = this.$(".winner-name").val()
    var loser = this.$(".loser-name").val()

    $.ajax({
      url: "/api/result/" + winner + "/" + loser,
      method: "GET",
      success: function(data) {
        router.navigate("", { trigger: true })
      }
    })
  }

})

$(document).on("ready", function(){

  templates = {
    standings: Handlebars.compile( $("#standings-template").text() ),
    team: Handlebars.compile( $("#team-template").text() ),
    addResult: Handlebars.compile( $("#add-result-template").text() )
  }

  views.standings = new StandingsView()
  views.team = new TeamView()
  views.addResult = new AddResultView()

  // This executes when the page is fully loaded
  Backbone.history.start()

})
