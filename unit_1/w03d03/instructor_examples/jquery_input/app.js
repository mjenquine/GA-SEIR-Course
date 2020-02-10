const list = []

$(() => {

  $('form').on('submit', (event) => {
    event.preventDefault()
    const inputValue = $('#person-name').val()
    list.push({name: inputValue, declined: false})
    $(event.currentTarget).trigger('reset')
    render()
  })
})

const render = () => {
  console.log('list:', list)
  // empty out unordered list
  $('ul').empty()
  // list is an array
  // .forEach is a method, that take a callback
  // the first argument is the variable name for each element
  // all we are doing for now is console logging the person
  list.forEach((person) => {
    // create a new list item
    // add text of the person's name
    // person is an object with two properties
    // name(string) and declined(boolean)
    const $li = $('<li>').text(person.name)
    // appending the list item to the ul
    $('ul').append($li)
    // adding an event listener/handler
    // when you click the li we will deal with declines
    $li.on('click', dealWithDeclines)

    // check if this person has declined
    if (person.declined) {
      // if true, update the css
      $li.css('text-decoration', 'line-through')
    }
  })
}

const dealWithDeclines = (event) => {
  // on click, the target that we clicked on
  // change the css
    $(event.currentTarget).css('text-decoration', 'line-through')
    // get the index position of the list item
    // it will match the index position in our list
    const index = $(event.currentTarget).index()
    // change the value of that list item to be true
    list[index].declined = true
}
