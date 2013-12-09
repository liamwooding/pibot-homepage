$(document).ready(function() {
	$('.make-square').each(function(i, e) {
		$(this).height($(this).width());
	});

	$(window).resize(function() {
		$('.make-square').each(function(i, e) {
			$(this).height($(this).width());
		});
	});
});