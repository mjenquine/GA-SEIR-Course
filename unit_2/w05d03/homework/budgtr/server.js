//dependencies
const express = require('express')
const app = express()
const PORT = 3000

//data
const expenditures = require('./models/budget.js')

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

//routes
////index
app.get('/budgets', (req, res) => {
  res.send(expenditures)
})

////create
app.post('/budgets', (req, res) => {
  console.log(req.body);
})

////show
app.get('/budgets/:index', (req, res) => {
  res.send('hi again')
})

////new
app.get('/budgets/new', (req, res) => {
  res.send('this works')
})



app.listen(PORT, () => {
  console.log('Listening on port', PORT);
})
