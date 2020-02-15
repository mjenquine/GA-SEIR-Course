const express = require('express')
const app = express()
const PORT = 3000

app.get('/greetings/:name', (req, res) => {
  res.send('Well hi there ' + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
  let tip = (Number(req.params.tipPercentage) / 100) * Number(req.params.total)
  console.log(tip);
  res.send('The total tip is ' + tip)
})



























app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
