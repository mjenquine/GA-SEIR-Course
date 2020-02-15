const express = require('express')
const app = express()
const PORT = 3000

app.get('/greetings/:name', (req, res) => {
  res.send('Well hi there ' + req.params.name)
})



























app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
