(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('.page-content').hide();
    $('#contact').fadeIn();
  };

  module.contactController = contactController;
})(window);
