function initMap() {
  var portland = {lat: 45.52, lng: -122.66};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: portland,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: portland,
    map: map
  });
}

$(document).ready(function() {

  var viewHeight = parseInt($(window).height());
  var isOpen = false;

  $('#menu-burger').click(function(){
    if ( isOpen === false ) {
      $('.mobile-menu').slideDown(200);
      isOpen = true;
    } else {
      $('.mobile-menu').slideUp(200);
      isOpen = false;
    }
  });

  $('.product-flavor').click(function(){
    $(this).addClass('selected-flavor');
  });

  $(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > (viewHeight * .9)) {
      $('.nav').addClass('navbar-fixed');
    } else {
      $('.nav').removeClass('navbar-fixed');
    }

    if ($(window).scrollTop() > ($(document).height() - viewHeight*4)) {
      $('#water').addClass('flow');
    } else {
      $('#water').removeClass('flow');
    }

    if (($(window).scrollTop() + viewHeight) >= ($(document).height() - viewHeight*.9)) {
      $('#bucket-back').addClass('full');
    }
  });

  $(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-(viewHeight*.1 - 1)
    }, 400);
  });

});
