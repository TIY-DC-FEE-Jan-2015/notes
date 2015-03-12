var views = {}
var templates = {}

var Router = Backbone.Router.extend({

  routes: {
    "": "roster",
    "student/:studentId": "student"
  },

  roster: function() {
    $.ajax({
      url: "/api/student",
      method: "GET",
      success: function(data) {
        views.roster.update(data)
        $("#content").html( views.roster.$el )
      }
    })
  },

  student: function(id) {
    $.ajax({
      url: "/api/student/" + id,
      method: "GET",
      success: function(data) {
        views.student.update(data)
        $("#content").html( views.student.$el )
      }
    })
  }

})

var RosterView = Backbone.View.extend({

  events: {
    "click .student": "clickStudent"
  },

  render: function() {
    console.log("rosterView data", this.data)
    this.$el.html( templates.roster(this.data) )
    this.delegateEvents()
  },

  update: function(data) {
    this.data = {
      students: data
    }
    this.render()
  },

  clickStudent: function(evt) {
    console.log("clicked on student", evt)

    var id = $(evt.target).attr("data-student-id")

    router.navigate(("student/" + id), { trigger: true })
  }

})

var StudentView = Backbone.View.extend({

  events: {
    "click .back": "clickBack"
  },

  render: function() {
    console.log("studentView data", this.data)
    this.$el.html( templates.student(this.data) )
    this.delegateEvents()
  },

  update: function(data) {
    this.data = data
    this.render()
  },

  clickBack: function() {
    router.navigate("", { trigger: true })
  }

})

var router = new Router()

$(document).on("ready", function(){

  templates = {
    roster: Handlebars.compile( $("#roster-template").text() ),
    student: Handlebars.compile( $("#student-template").text() )
  }

  views.roster = new RosterView()
  views.student = new StudentView()

  Backbone.history.start({ pushState: true })

})
