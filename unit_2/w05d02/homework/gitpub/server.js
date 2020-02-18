const express = require('express')
const app = express()
const PORT = 3000
const drinks = require('./models/drinks.js')

app.get('/', (req, res) => {
  res.send('Welcome to the gitpub app!')
})

app.get('/drinks', (req, res) => {
  res.render('index.ejs', {
    allDrinks: drinks
  })
})


















app.listen(PORT, () => {
  console.log('server running');
})
