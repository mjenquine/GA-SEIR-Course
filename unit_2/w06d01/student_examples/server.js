//Initialize my variables/////////////////////////////
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Fruit = require('./models/fruits.js')
const PORT = 3000
//End Variables///////////////////////////////////////
//Express Middleware ie Body Parser, Method Override, static etc
app.use(express.urlencoded({exteded: true}))
//Database connection
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
//////////////////////Routes//////////////////////////

//Presentation Rountes////////////////////////////////
//INDEX
app.get('/fruits', (req, res) => {
  //(error, allFruits)
  //first argument is going to contain data if something went wrong
  //second argument will contain data if we got what we asked for
  Fruit.find({}, (error, allFruits) => {
    res.render('index.ejs', {
      fruits: allFruits
    })
  })
})
//NEW
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
})
//SEED - NOT PART OF RESTful Routes
app.get('/fruits/seed', (req, res)=>{
    Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ], (err, data)=>{
        res.redirect('/fruits');
    })
});
//SHOW
app.get('/fruits/:id', (req, res) => {
  Fruit.findById(req.params.id, (error, foundFruit) => {
    res.render('show.ejs', {
      fruit: foundFruit
    })
  })
})
//EDIT

//Functional Routes//////////////////////////////////

//CREATE
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit) => {
      res.redirect('/fruits')
    })
});
//UPDATE

//DELETE
app.delete('/', (req, res) => {

})

//Tell Node and Express to listen for requests//////////
app.listen(PORT, (req, res) => {
  console.log('listening...');
})
//End Listen////////////////////////////////////////////
