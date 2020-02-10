console.log('Wassup people');

const randColorRGB = () => {
	const red = Math.floor( Math.random() * 256 );
	const green = Math.floor( Math.random() * 256 );
	const blue = Math.floor( Math.random() * 256 );
	return `rgb(${red},${green},${blue})`;
}

const generateSquares = (limit) => {
  for (let i=1; i <= limit; i++) {
		console.log(i);
		const $square = $('<div>').addClass('square');
     $square.css('background-color', randColorRGB());
     $square.text(i);
		$('body').append($square);
	}
}


$( () => {
  generateSquares(1000);
  // This function adds and H2 to the dom
    // const addH2 = () => {
    //   const $h2 = $('<h2>').text("Just getting started today");
    //   $('body').append($h2);
    //   console.log('hiiiii')
    // }
  // This function adds an H1 to the dom
    // const addH1 = () => {
    //   const $h1 = $('<h1>im super cool <span> your cool</span></h1>');
    //     $('body').append($h1);
    //     console.log('H1 says hi also');
    // }
   //addH2();
   // addH1();

   // for (let i =1; i <= 1000; i++){
   //   console.log('square' + i)
   // }
})
