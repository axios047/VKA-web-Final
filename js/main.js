$(window).ready(function () {
  $(this).scrollTop(0);
});

$(window).scroll(function () {

  var s= $(this).scrollTop();
  if (s>150) {
    $('header').addClass('shrink-header');
  }
  else {
    $('header').removeClass('shrink-header');
  }

});
