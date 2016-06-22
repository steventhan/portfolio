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

  $('.slick').slick({
    arrows: true,
    draggable: false,
    focusOnSelect: false
  });
});
