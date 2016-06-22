var projectView = {};

projectView.renderProjectPage = function () {
  Project.allProjects.forEach(function(project){
    $('#projects').append(project.toHtml());
  });
};

Project.fetchAll();
