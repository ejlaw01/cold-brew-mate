$(document).ready(function() {
  $(window).scroll(function () {
    var viewHeight = parseInt($(window).height());
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > (viewHeight * .9)) {
      $('.nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < (viewHeight * .9)) {
      $('.nav').removeClass('navbar-fixed');
    }
    if ($(window).scrollTop() > 1365) {
      $('#water').addClass('flow');
    }
    if (($(window).scrollTop() < 1365) || ($(window).scrollTop() > 2430)) {
      $('#water').removeClass('flow');
    }
    // if ($(window).scrollTop() > 1800) {
    //   $('#bucket-back').addClass('full');
    // }
  });
});
