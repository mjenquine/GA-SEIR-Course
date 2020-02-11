
$(() => {

	const changeColor = (event) => {
		$(event.target).addClass('pink');
	}


  $('input').on('submit', () => {
    console.log(inputBox.val());
  })



	for (let i = 0; i < 1000; i++) {
		let $div = $('<div>');
		$div.addClass('square');
		$('body').append($div);
	}

	$('div').on('mouseover', changeColor);



});
