const express = require('express')
const app = express()
const PORT = 3000
const drinks = require('./models/drinks.js')
const food = require('./models/food.js')

app.get('/', (req, res) => {
  res.send('Welcome to the gitpub app!')
})

app.get('/drinks', (req, res) => {
  res.render('index.ejs', {
    allDrinks: drinks,
    allFood: food
  })
})
app.get('/drinks/:id', (req, res) => {
  res.render('show.ejs', {
    allDrinks: drinks[req.params.id],
    allFood: food[req.params.id]
  })
})
app.get('/food/:id', (req, res) => {
  res.render('showfood.ejs', {
    allFood: food[req.params.id]
  })
})


















app.listen(PORT, () => {
  console.log('server running');
})
