// Dependencies
const express = require('express')
const app = express()
const port = 3000

// 'Data'
const fruits = require('./models/fruits.js')

// routes

// index
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits
  })
})

// show
app.get('/fruits/:index', (req, res) => {
  const currentFruit = fruits[req.params.index]
  res.render('show.ejs', {
    fruit: currentFruit
  })
})

app.listen(port, () => {
  console.log('listening on port', port)
})
