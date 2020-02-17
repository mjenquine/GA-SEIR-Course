const express = require('express')
const app = express()
// console.log(express)
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/somedata', (req, res) => {
  res.send('here is your information')
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})
