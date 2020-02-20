//dependencies
const express = require('express')
const app = express()
const PORT = 3000

//data
const budget = require('./models/budget.js')

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

//routes
////index
app.get('/budgets', (req, res) => {
  res.render('index.ejs',{
    budget: budget
  })
})

////create
app.post('/budgets', (req, res) => {
  budget.push(req.body)
  res.redirect('/budgets')
})

////new
app.get('/budgets/new', (req, res) => {
  res.render('new.ejs')
})

////show
app.get('/budgets/:index', (req, res) => {
  const lineItem = budget[req.params.index]
  res.render('show.ejs', {
    budget: lineItem
  })
})


app.listen(PORT, () => {
  console.log('Listening on port', PORT);
})
