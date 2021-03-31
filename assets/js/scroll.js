window.onload = function() {
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var scrollArea = 1000 - windowHeight;
  var img = document.getElementById('home-img');

  $("video").prop("volume", 0.7);

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.header').addClass('nav-w-bg');
    } else {
      $('.header').removeClass('nav-w-bg');
    }

    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop / scrollArea || 0;

    img.style.top = 7 + (-0.5 * Math.sqrt(scrollPercent * window.scrollY)) * 0.5 + 'vw';
    img.style.right = 2.2 + (-0.5 * Math.sqrt(scrollPercent * window.scrollY)) * 0.5 + 'vw';
  });
}
