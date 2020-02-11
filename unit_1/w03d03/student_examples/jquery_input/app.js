const list = []

$(() => {
//===============================================
  $('form').on('submit', (event) => {
    event.preventDefault()
    const inputValue = $('#person-name').val()
    list.push({name: inputValue, declined: false})
    $(event.currentTarget).trigger('reset')
    render()
  })

//===============================================
});

  const render = () => {
    console.log('list:', list);
    //below empties the list because $('ul').append($li) appends all the $li(s)
    $('ul').empty()

    list.forEach((person) => {
      const $li = $('<li>').text(person.name)
      $('ul').append($li)
      $li.on('click', (event) => {
        $(event.currentTarget).css('text-decoration', 'line-through')
        const index = $(event.currentTarget).index()
        list[index].declined = true
        console.log(list);
      })
      if (person.declined) {
        $li.css('text-decoration', 'line-through')
      }
    })
  }
