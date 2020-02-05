

$( () => {
////////////////////////////////////////////////////////////////////

  const addH2 = () => {
    const $h2 = $('<h2>').text('Just getting started today');
    $('body').append($h2);
  }
  addH2();

  for (let i = 1; i <= 1000; i++) {
    console.log('square' + i);
  }

  for (let i = 1; i <= 1000; i++) {
    console.log('square' + i);
    const $square = $('<div>').addClass('square');
    $('body').append($square);
  }
////////////////////////////////////////
  const randColorRGB = () => {
  const red = Math.floor( Math.random() * 256 );
  const green = Math.floor( Math.random() * 256 );
  const blue = Math.floor( Math.random() * 256 );
  return `rgb(${red},${green},${blue})`;
  }

  const generateSquares = (limit) => {
    for (let i = 1; i <= limit; i++) {
      console.log('square' + i);
      const $square = $('<div>').addClass('square');
      $square.css('background-color', randColorRGB());
      $square.text(i)
      $('body').append($square);
    }
  }

  generateSquares(1000);
////////////////////////////////////////











//////////////////////////////////////////////////////////////////////
});
