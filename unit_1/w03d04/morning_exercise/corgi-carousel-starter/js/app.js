

$(() => {
//=======================================================================
  let currentImageIndex = 0
  let highestIndex = $('.carousel-images').children().length -1

  $('.next').on('click', () => {
    // stuff is going to go here
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'none')
    if (currentImageIndex < highestIndex) {
      currentImageIndex++
    } else {
      currentImageIndex = 0
    }
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'block')
  })

  $('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'none')
    if (currentImageIndex > 0) {
      currentImageIndex--
    } else {
      currentImageIndex = highestIndex
    }
    $('.carousel-images').children().eq(currentImageIndex).css('display', 'block')
  })
//=======================================================================
})
