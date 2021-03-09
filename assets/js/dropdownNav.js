$(window).ready(function(){
  $('div#dropdown').hide()
  $('a#dropdown-btn').on('click', function() {
		$('div#dropdown').slideToggle(500);
	});
})
