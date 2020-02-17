const express = require('express')
const app = express()
const PORT = 3000

app.get('/calc/:num1/:num2', (req, res) => {
  let num = Number(req.params.num1) + Number(req.params.num2)
  res.send('the sum is ' + num)
})

app.get('/someroute', (req, res) => {
  console.log('req.query: ', req.query);
  res.send('someroute accessed');
})

app.get('/calcquery/:num1/:num2', (req, res) => {
  let num1 = Number(req.params.num1)
  let num2 = Number(req.params.num2)

  if (req.query.operation === 'add') {
    let sum = num1 + num2
    res.send('The total is ' + sum)
  } else if (req.query.operation === 'multiply') {
    let sum = num1 * num2
  } else if (req.query.operation === 'subtract') {
    let sum = num1 - num2
  }

})

//this wasn't complete but the addition function worked on the final app.get












app.listen(PORT, () => {

})
