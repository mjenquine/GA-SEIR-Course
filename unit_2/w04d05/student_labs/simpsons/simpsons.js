const express = require('express')
const app = express()

app.get('/homer', (req, res) => {
  res.send('Beer')
})




app.listen(3000, console.log('Hello World'));
