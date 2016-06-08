$(document).ready(function(){
  $('#hamburger-menu').click(function(){
    $('#main-menu').toggleClass('collapse');
  });

  $('#projects-link').click(function(){
    $('#main-menu').toggleClass('collapse');
  });

  $('#projects-link').animatedModal(
    {
      color: '#111d29',
      animatedIn: 'fadeInUp',
      animatedOut: 'fadeOutDown'
    }
  );

  var projects = [];
  function Project(projectData) {
    this.projectName = projectData.projectName;
    this.category = projectData.category;
    this.technology = projectData.technology;
    this.image = projectData.image;
    this.url = projectData.url;
    this.github = projectData.github;
    this.developmentStart = projectData.developmentStart;
    this.developmentEnd = projectData.developmentEnd;
    this.detail = projectData.detail;
  }

  Project.prototype.toHtml = function() {
    var $project = $('project.project-template').clone();
    $project.find('.project-img img').attr('src', this.image);
    $project.find('.project-name').text('Project: '+ this.projectName);
    $project.find('.type').text('Type: ' + this.category);
    $project.find('.url a').attr('href', this.url);
    $project.find('.github a').attr('href', this.github);
    $project.find('.technology').text('Technology: ' + this.technology.join(', '));
    $project.find('.project-detail').append(this.detail);
    $project.find('.development-start').text('Start: ' + this.developmentStart);
    $project.find('.development-end').text('End: ' + this.developmentEnd);
    $project.removeClass('project-template');
    return $project;
  };

  myProjects.forEach(function(projectData) {
    projects.push(new Project(projectData));
  });

  projects.forEach(function(project){
    $('#projects').append(project.toHtml());
  });

  $('.slick').slick({
    arrows: true,
    draggable: false,
    focusOnSelect: false
  });
});
