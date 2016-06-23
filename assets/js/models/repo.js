(function(module) {
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function (nextFunction) {
    $.get('/github/users/steventhan/repos')
          .done(function(data) {
            repos.allRepos = data;
          }).done(nextFunction);
    // $.ajax({
    //   url: 'https://api.github.com/users/steventhan/repos',
    //   type: 'GET',
    //   headers: {'Authorization': 'token ' + githubToken},
    //   success: function(data) {
    //     repos.allRepos = data;
    //     nextFunction();
    //   }
    // });
  };

  module.repos = repos;
})(window);
