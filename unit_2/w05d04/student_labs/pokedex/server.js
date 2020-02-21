// dependancies
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const PORT = 3000
// middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

// data
const pokemon = require('./models/pokemon.js')

// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { pokemon: pokemon })
})
//NEW
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs')
})

// SHOW
app.get('/pokemon/:index', (req, res) => {
  const currentPokemon = pokemon[req.params.index]
  res.render('show.ejs', {
  pokemon: currentPokemon })
});
//EDIT
app.get('/pokemon/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon:  pokemon[req.params.index],
    index: req.params.index
  })
})
//Delete
app.delete('/pokemon/:index', (req, res) => {
  pokemon.splice(req.params.index, 1)
  res.redirect('/pokemon')
})
// Update
app.put('/pokemon/:index', (req, res) => {
  pokemon[req.params.index] = req.body
  req.body.stats = {
    hp: req.body.hp,
    attack: req.body.attack,
    defense: req.body.defense
  }
  console.log(req.body);
  res.redirect('/pokemon')
})
//CREATE
app.post('/pokemon', (req, res) => {
  console.log(req.body);
  req.body.stats = {
    hp: req.body.hp,
    attack: req.body.attack,
    defense: req.body.defense
  }
  console.log(req.body);
  pokemon.push(req.body)
  res.redirect('/pokemon')
})


app.listen(PORT, () => {
  console.log("listening");
})

// {
//   name: 'mj',
//   type: 'grass',
//   hp: '1',
//   attack: '1',
//   defense: '1'
// }
// {
//   name: 'mj',
//   type: 'grass',
//   stats: {
//     hp: '1',
//     attack: '1',
//     defense: '1'
//   }
// }
