var getGitHubUser = function(githubUsername) {

  $.ajax({

    url: "https://api.github.com/users/" + githubUsername,

    success: function(data) {

      //var imgString = "<img src='" + data.avatar_url + "' />";

      //$("#content").append(imgString)

      console.log("user data", data);

      $.ajax({

        url: data.repos_url,

        success: function(repoData) {

          var firstRepo = "<a href='" + repoData[0].html_url + "'>" + repoData[0].name + "</a>"

          $("#content").append(firstRepo)

          console.log("repo data", repoData);

        }

      })

    }

  })

}