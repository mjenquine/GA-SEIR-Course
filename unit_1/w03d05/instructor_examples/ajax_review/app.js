$(() => {
  $('.button').on('click', (event) => {
    event.preventDefault()

    let userInput = $('input[type="text"]').val() || 10
    let borough = $(event.target).attr('id')
    // console.log(userInput)
    // console.log(borough)
    // let link =

    $.ajax({
      url: `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=${borough}&agency=NYPD`,
      type: "GET",
      data: {
        "$limit": userInput
      }
    }).then((data) => {
      console.log(data);
      for (let i = 0; i < userInput; i++) {
        const $descriptor = $('<dd>').attr('class', 'descriptor' + [i])
        $('.reports').append($descriptor)
        $descriptor.html("INCIDENT: " + data[i].descriptor)
        const $policeButton = $('<button>').attr('class', 'policeButton').text('Check Response')
        $('.reports').append($policeButton)
        const $newText = $('<p>')
        $newText.text("Police Response" + data[i].resolution_description)
        $descriptor.append($newText)
        $newText.hide()
        $policeButton.on('click', (event) => {
          event.preventDefault()
          $newText.toggle()
        })

      }
    })
  })
})
