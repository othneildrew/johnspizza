$(function() {

  // Add background color to nav when user scrolls more than 50px down
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#main-navbar
      ').addClass('shadow-sm');
    }
    if ($(this).scrollTop() < 50) {
      $('#main-navbar').removeClass('shadow-sm');
    }
  });

});
