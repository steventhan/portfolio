var appView = {};

appView.mainNav = function(){
  $('#main-menu').on('click', '.menu-item', function() {
    $('.page-content').hide();
    var page = $(this).attr('data-page');
    $('#' + page).fadeIn();
  });
  $('#main-menu .menu-item:first').click();
};

appView.renderProjectPage = function () {
  Project.all.forEach(function(project){
    $('#projects').append(project.toHtml());
  });
};
appView.mainNav();
Project.fetchAll();
