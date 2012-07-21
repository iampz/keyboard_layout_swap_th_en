(function() {
	function swap(e) {
		setTimeout(function() {
			if ($('#lang').find('.active').attr('id') === 'en_th') {
				$('#result').text(Keyboard.toThai($('#input').val()));
			} else {
				$('#result').text(Keyboard.toEng($('#input').val()));
			}
		}, 100);
	}
	$('#input').on('keyup', swap);
	$('#lang button').on('mouseup', swap);
})();
