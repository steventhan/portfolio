(function(module) {
  homeView = {};

  function repoCompiler(repo) {
    source = $('#repo-template').html();
    template = Handlebars.compile(source);
    return template(repo);
  }

  homeView.renderRepos = function() {
    $('#github-repos').append(repos.allRepos.map(repoCompiler));
  };

  repos.requestRepos(homeView.renderRepos);
  module.homeView = homeView;
})(window);
