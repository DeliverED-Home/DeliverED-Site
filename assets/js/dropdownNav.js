$(window).ready(function(){
  $('div#dropdown').hide()
  $('a#dropdown-btn').on('click', function() {
		$('div#dropdown').slideToggle(700);
    // $('a#dropdown-btn>i').removeClass('fa-chevron-down');
    $('a#dropdown-btn>i').toggleClass('fa-chevron-up');
	});
  $('div#dropdown>div>div>a').on('click', function() {
		$('div#dropdown').slideToggle(400);
    $('a#dropdown-btn>i').toggleClass('fa-chevron-up');
	});
})
