var projectView = {};

// projectView.mainNav = function(){
//   $('#main-menu').on('click', '.menu-item', function() {
//     $('.page-content').hide();
//     var page = $(this).attr('data-page');
//     $('#' + page).fadeIn();
//   });
//   $('#main-menu .menu-item:first').click();
// };

projectView.renderProjectPage = function () {
  Project.allProjects.forEach(function(project){
    $('#projects').append(project.toHtml());
  });
};
// projectView.mainNav();
Project.fetchAll();
