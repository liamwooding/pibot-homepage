$(document).ready(function() {
	$('.make-square').each(function(i, e) {
		$(this).height($(this).width());
	});

	$(window).resize(function() {
		$('.make-square').each(function(i, e) {
			$(this).height($(this).width());
		});
	});

	$('.accordion-heading').on('click', function() {
		$(this).toggleClass('open')
	})
});