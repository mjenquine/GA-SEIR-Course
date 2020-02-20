const express = require('express')
const app = express()
const PORT = 3000


let superHeros = [
  {
    name: 'Superman',
    powers: [
      'flight', 'invulnerability', 'x-ray vision'
    ]
  },
  {
    name: 'Wonderwoman',
    powers: ['flight', 'superhuman strength', 'alien intelligence']
  },
  {
    name: 'Black Panther',
    powers: ['speed', 'stamina', 'reflexes']
  }
]

app.get('/superheros', (req, res) => {
  res.send(superHeros)
})

app.get('/superheros/:index', (req, res) => {
  res.send(superHeros[req.params.index].name)
})


















//Listener
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
})
