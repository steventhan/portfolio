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
