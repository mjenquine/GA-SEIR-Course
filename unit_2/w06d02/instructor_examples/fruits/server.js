/*
**********************
  Initialize my Variables
***********************
*/
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');
const PORT = 3000;
/* End Variables */

/*
***********************
  Express Middleware i.e
  Body Parser, Static, Method Override etc
***********************
*/
app.use(express.urlencoded({extended: true}));

/* Middleware End*/


/* Database Connection */
mongoose.connect('mongodb://localhost:27017/fruits1', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mogodb database.')
})
/* Database Connection End */

/*********************
ROUTES
*******************/

/* **********************************
PRESENTATIONAL ROUTES
***********************************/

        // Index
        app.get('/fruits', (req, res) => {
          // First argument is going to contain data if something went wrong (**error**, allFruits)
          // Second argument will contain data if we got what we asked for (error, **allFruits**)
          Fruit.find({}, (error, allFruits) => {
            if (error){
              res.send('OOPs you have boo boo')
            }
            console.log(allFruits)
            res.render('index.ejs', {
              fruits: allFruits
            })// end the res.render
          })// this is the fruits call back
        }/*This is the end of the app.get callback*/)
        /* Index Ends */

        // New  is connected Create [ Create has the functionality]
        app.get('/fruits/new', (req, res) => {
          res.render('new.ejs')
        })

        // SEED
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

        // Show
        app.get('/fruits/:id', (req, res) => {
          Fruit.findById(req.params.id, (error, foundFruit) => {
            res.render('show.ejs', {
              fruit: foundFruit
            })
          })
        })

        // Edit
/* PRESENTATIONAL routes END */


/*********************************
     FUNCTIONAL ROUTES
*********************************/

        // ******CREATE *****
        // Create is connected to New [New shows the form that allows you to call this Create Functionality]
        app.post('/fruits/', (req, res)=>{
            if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
                req.body.readyToEat = true;
            } else { //if not checked, req.body.readyToEat is undefined
                req.body.readyToEat = false;
            }
            Fruit.create(req.body, (error, createdFruit) => {
              res.redirect('/fruits');
            })
        });
        /* End Create Route */

        // Update
        app.put('/', (req, res) => {

        })

        // Delete
        app.delete('/', (req, res) => {

        })

        /* Routes End */

/*****************************
  Tell Node and Express where to listen for requests
*****************************/
  app.listen(PORT, (req, res) => {
    console.log("Arthur is awesome...")
  })
/* End Listen */
