// =======================
//     DEPENDENCIES
// =======================
// -- packages
const express = require('express')
const app = express()

// -- database
const drinks = require('./models/drinks')
const food = require('./models/food')

// -- config
const port = 3000

// =======================
//     MIDDLEWARE
// =======================
// static files
app.use(express.static('public'))

// =======================
//       ROUTES
// =======================
// get root index
app.get('/', (req, res) => {
  res.send('Welcome to the gitPub app!')
})

// get drinks index
app.get('/pub', (req, res) => {
  // loop through each drink in the database in order to properly capitalize them all
  for (let drink of drinks) {
    // split name into every separate word
    let splitName = drink.name.split(' ')
    // loop through each individual word
    for(let i = 0; i < splitName.length; i++) {
      // split the word into its individual letters
      let splitWord = splitName[i].split('')
      // uppercase the first letter
      splitWord[0] = splitWord[0].toUpperCase()
      // rejoin the word
      splitName[i] = splitWord.join('')
    }
    // rejoin the words
    drink.name = splitName.join(' ')
  }
  // rendering the index
  res.render('index.ejs', {
    drinks: drinks,
    food: food,
    tabTitle: 'Master Branch'
  })
})

// get drinks show individual
app.get('/drinks/:id', (req, res) => {
  res.render('showDrinks.ejs', {
    drink: drinks[req.params.id],
    tabTitle: 'fooBar()...'
  })
})

// get food show individual
app.get('/food/:id', (req, res) => {
  res.render('showFood.ejs', {
    food: food[req.params.id],
    tabTitle: 'fooD()'
  })
})

// get new
app.get('/new', (req, res) => {
  res.render('new.ejs', {
    tabTitle: 'add -A'
  })
})


// =======================
//       LISTENER
// =======================
app.listen(port, () => {
  console.log(`listening to gitpub on port ${port}`)
})
