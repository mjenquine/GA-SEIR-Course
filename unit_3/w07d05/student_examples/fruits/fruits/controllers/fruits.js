// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const  Fruit = require('../models/fruits.js')

/* **********************************
PRESENTATIONAL ROUTES
***********************************/

        // Index
        router.get('/', (req, res) => {
          // First argument is going to contain data if something went wrong (**error**, allFruits)
          // Second argument will contain data if we got what we asked for (error, **allFruits**)
          Fruit.find({}, (error, allFruits) => {
            if (error){
              res.send('OOPs you have boo boo')
            }
            console.log(allFruits)
            res.render('Index', {
              fruits: allFruits
            })// end the res.render
          })// this is the fruits call back
        }/*This is the end of the router.get callback*/)
        /* Index Ends */

        // New  is connected Create [ Create has the functionality]
        router.get('/new', (req, res) => {
          res.render('New')
        })

        // SEED
        router.get('/seed', (req, res)=>{
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
        router.get('/:id', (req, res) => {
          Fruit.findById(req.params.id, (error, foundFruit) => {
            res.render('Show', {
              fruit: foundFruit
            })
          })
        })

        // Edit
        router.get('/:id/edit', (req, res)=>{
          Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
            res.render('Edit', {
            fruit: foundFruit //pass in found fruit
        });
    });
});

/*********************************
     Presntational Routes End
*********************************/

/******************************************************************************/

/*********************************
     FUNCTIONAL ROUTES
*********************************/
        // ******CREATE *****
        // Create is connected to New [New shows the form that allows you to call this Create Functionality]
        router.post('/', (req, res)=>{
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
        router.put('/:id', (req, res) => {
          if (req.body.readyToEat === 'on'){
              req.body.readyToEat = true;
              } else {
              req.body.readyToEat = false;
              }
              Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit)=>{
              res.redirect(`/fruits/${updatedFruit.id}`);
          });
        })

        // Delete
        router.delete('/:id', (req, res) => {
          Fruit.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
            res.redirect('/fruits')
          })
        })

/*********************************
     FUNCTIONAL ROUTES End
*********************************/

module.exports = router;
