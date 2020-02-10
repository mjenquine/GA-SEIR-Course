$(() => {
  $('.button').on('click', (event) => {
    event.preventDefault()

    //Grab the number from the input box
    let userInput = $('input[type="text"]').val() || 10
    //Grap the borough based on the id of the button
    let borough = $(event.target).attr('id')
    //Set the link with dynamically changing the borough using the var we made above
    let link = `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=${borough}&agency=NYPD`

    //AJAX request
    $.ajax({
      url: link,
      type: "GET",
      data: {
        "$limit": userInput
      }
      //Define the data as rerports
    }).then((reports) => {
      // For of loop that loops through the data (reports)
      for (let report of reports) {
        // Select class of reports
        const $reports = $('.reports')

        //Append 1 div per report
        const $div = $('<div>')
          .appendTo($reports)

        //Create an h3 add the descriptor from reports and append it to the div
        const $h3 = $('<h3>')
          .text(report.descriptor)
          .appendTo($div)

        //Create a p tag with the description and append it to the div (hide initally)
        const $text = $('<p>')
          .text(report.resolution_description)
          .appendTo($div)
          .hide()

        //Create police button add text and append it to the div.
        const $policeButton = $('<button>')
          .text("What did the police do?")
          .appendTo($div)
          //Add an on click to the button that selects the p tag and toggles it
          .on('click', (event) => {
            $(event.currentTarget).parent().children().eq(1).toggle()
        })
      }
    })
  })



})
