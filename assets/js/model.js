(function(module) {

  Project.allProjects = [];
  function Project(projectData) {
    for (property in projectData) {
      this[property] = projectData[property];
    }
  }

  Project.prototype.toHtml = function() {
    var source = $('#project-template').html();
    var template = Handlebars.compile(source);
    var html = template(this);
    return html;
  };


  Project.loadAll = function (projectData) {
    Project.allProjects = projectData.map(function(projectData) {
      return new Project(projectData);
    });
  };

  Project.fetchAll = function () {
    if (localStorage.projectData) {
      Project.loadAll(JSON.parse(localStorage.projectData));
      appView.renderProjectPage();
      // $.ajax({
      //   url: 'assets/js/data/projects.json',
      //   type: 'HEAD',
      // }).done(function(data, message, xhr){
      //   if (xhr.getResponseHeader('eTag') !== localStorage.eTag) {
      //     localStorage.eTag = JSON.stringify(xhr.getResponseHeader('eTag'));
      //     $.getJSON('assets/js/data/projects.json', function(data, message, xhr) {
      //       localStorage.projectData = JSON.stringify(data);
      //       Project.loadAll(JSON.parse(localStorage.projectData));
      //       appView.renderProjectPage();
      //     });
      //   } else {
      //     Project.loadAll(JSON.parse(localStorage.projectData));
      //     appView.renderProjectPage();
      //   }
      // });
    } else {
      $.getJSON('assets/js/data/projects.json', function (data, message, xhr) {
        localStorage.eTag = xhr.getResponseHeader('eTag');
        localStorage.projectData = JSON.stringify(data);
        Project.loadAll(JSON.parse(localStorage.projectData));
        appView.renderProjectPage();
      });
    }
  };

  Project.allProjects.forEach(function(project){
    $('#projects').append(project.toHtml());
  });

  module.Project = Project;
})(window);
