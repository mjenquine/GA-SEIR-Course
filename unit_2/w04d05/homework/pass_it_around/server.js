const express = require('express')
const app = express()
const PORT = 3000

app.get('/pass/:num', (req, res) => {
  if (req.params.num > 90) {
    res.send(`${req.params.num} Bottles of beer on the wall.  <html><p><a href='/pass/${Number(req.params.num - 1)}'>Take one down and pass it around</a></p></html>`)
  } else {
    res.send(`
      <html>
        <p>
          <a href='/pass/99'>Start Over</a>
        </p>
        <p>
          <img src='https://media.giphy.com/media/15eGtjiRIgJ2M/giphy.gif'>
        </p>
      </html>
    `)
  }
})

app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
