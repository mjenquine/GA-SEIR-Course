const express = require('express')
const app = express()

const PORT = 3000

app.use(express.urlencoded({extended:false}))

app.use(express.static('public'))

const Budget = require('./models/budget')

// ========== Routes ==========//

//== Index ==//
app.get('/budgets', (req, res) => {

  // delcare a sum var to pass into our ejs file
  let sum = 0

  // loop over budget model add each amount into sum
  for (let item of Budget) {
    sum += Number(item.amount)
  }

  console.log(sum);

  res.render('index.ejs', {
    // pass through sum and budget as variables into the ejs file
    money: sum,
    items: Budget
  })
})
//== Post ==//
app.post('/budgets', (req, res) => {
  Budget.push(req.body)
  console.log('The is the body of the request', req.body);
  res.redirect('/budgets')
})

//== New ==//
app.get('/budgets/new', (req, res) => {
  res.render('new.ejs')
})

//== Show ==//
app.get('/budgets/:index', (req, res) => {
  res.render('show.ejs', {
    item: Budget[req.params.index]
  })
})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
