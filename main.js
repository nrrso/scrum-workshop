function tick(element) {
	var start = element.text();
	var value = start - 1;
	element.text(value);
	if(value > 0) {
		timeout = setTimeout(function() { tick(element) }, 1000);
	}
}

$(document).on('ready', function() {
	$('.countdown').on('click', function() {
		if(typeof timeout !== 'undefined') {
			$(this).text('600');
			clearTimeout(timeout);
			delete timeout;
		} else {
			tick($(this));
		}
		return false;
	});
});