(function(module) {
  var aboutMeController = {};

  aboutMeController.index = function() {
    $('.page-content').hide();
    $('#about-me').fadeIn();
  };

  module.aboutMeController = aboutMeController;
})(window);
