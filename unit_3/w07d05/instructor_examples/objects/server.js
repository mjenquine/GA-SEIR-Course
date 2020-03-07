/* initialize our vars */
const express = require('express'); // getting express from node modules
const app = express(); // creating our server with the express function
const port = 3000;


/* Middleware */
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/* Routes */
app.get('/', (req, res) => {
  res.render('Adventurer', {
    name: 'King Arthur the Brilliant',
    title: "the song of the GOAT",
    mission: "to be the very best like no one ever was..... dun dun dun dun"
  })
  // const Arthur = new Adventurer({name: 'King Arthur'}) doing this behind the scenes
})

app.get('/:name/:title/:mission/:tools', (req,res) => {
 res.render('Adventurer', {name: req.params.name , title: req.params.title, mission: req.params.mission, tools : req.params.tools});
})



app.listen(port, (req, res) => {
  console.log("listening to the magical journey you will embark on in OBJECTS AND ORCS...")
})
