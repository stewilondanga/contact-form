// Auto resize input
function resizeInput() {
    $(this).attr('size', $(this).val().length);
}


var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
