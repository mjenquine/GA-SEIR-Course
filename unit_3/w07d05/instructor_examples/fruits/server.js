/******************************************************************
  Initialize my Variables
*****************************************************************/
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const fruitsController = require('./controllers/fruits.js');
const PORT = 3000;
/******************************************************************
  End Variables
******************************************************************/

/********************************************************************
  Express Middleware i.e
  Body Parser, Static, Method Override etc
*******************************************************************/
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));// _method is the query param we use to tell express.js what method we actually want to use
app.use(express.static('public'));
app.use('/fruits', fruitsController);
/*********************************************************************
  End My Middleware
**********************************************************************/


/******************************************************************
Database Connection
*****************************************************************/
mongoose.connect('mongodb://localhost:27017/fruits1', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to mogodb database.')
})
/******************************************************************
  End Database Connection
*****************************************************************/

/******************************************************************
  Listen
*****************************************************************/
  app.listen(PORT, (req, res) => {
    console.log("Arthur is awesome...")
  })
  /******************************************************************
    End Listen
  *****************************************************************/
