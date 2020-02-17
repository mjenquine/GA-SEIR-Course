const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/somedata', (req, res) => {
  res.send('here is your information. I\'m checking to see if nodemon is running')
})

app.listen(3000, () => {
  console.log('my server is listening on port 3000');
})
