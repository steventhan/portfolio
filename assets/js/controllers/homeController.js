(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('.page-content').hide();
    $('#home').fadeIn();
  };

  module.homeController = homeController;
})(window);
