$(window).ready(function(){
  $('div#dropdown').hide()
  $('a#dropdown-btn').on('click', function() {
		$('div#dropdown').slideToggle(700);
	});
  $('div#dropdown>div>div>a').on('click', function() {
		$('div#dropdown').slideToggle(400);
	});
})
