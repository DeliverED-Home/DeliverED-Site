var container = document.getElementById('home');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var img = document.getElementById('home-img');

img.style.right = 10 + 'vw';

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = -scrollTop/scrollArea || 0;

  img.style.right = 10 + scrollPercent + 'vw';
  img.style.top = -1*scrollPercent + 'vw';
  console.log("hi");
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.header').addClass('nav-w-bg');
  } else {
    $('.header').removeClass('nav-w-bg');
  }
});
