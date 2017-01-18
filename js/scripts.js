$(document).ready(function() {

  var viewHeight = parseInt($(window).height());

  $(window).scroll(function () {
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
  });

  $(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-(viewHeight*.1 - 1)
    }, 400);
});

});
