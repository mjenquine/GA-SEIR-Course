//Initialize our vars
const express = require('express') //gets express from node modules
const app = express() // creates server with express function
const port = 3000

//Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine()) // we didn't have to do this before because Express can read EJS by default so no need to reassign the view engine

//Routes
app.get('/', (req,res) => {
  res.render('Adventurer', {
    name:'King Arthur the Brilliant',
    title: 'the song of the GOAT',
    mission: 'to be the very best like no one ever was..... dun dun dun dun'
  });
})

app.get('/:name/:title/:mission', (req,res) => {
res.render('Adventurer', {name: req.params.name , title: req.params.title, mission: req.params.mission});
})

app.get('/:name/:title/:mission/:tools', (req,res) => {
 const name = req.params.name.split('_').join(' ')
 const title = req.params.title.split('_').join(' ')
 const mission = req.params.mission.split('_').join(' ')
 const tools = req.params.tools.split('_').join(' ').split(',')
 res.render('Adventurer', {name: name , title: title, mission: mission, tools : tools});
})







app.listen(port, (req, res) => {
  console.log("listening to the magical journey you will embark on in OBJECTS AND ORCS...")
})
