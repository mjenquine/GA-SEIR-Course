//Variables
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Logs = require('./models/logs.js')
const PORT = 3000
//Middleware
app.use(express.urlencoded({extended: true}))
//Database Connection
mongoose.connect('mongodb://localhost:27017/captainlogcrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
///////////////////////////////////////////////////////////////
//                   Routes
///////////////////////////////////////////////////////////////

////Presentation Routes

//Index


//New


//Show


//Edit


////Functional Routes

//Create


//Update


//Delete


///////////////////////////////////////////////////////////////////
//                   End Routes
///////////////////////////////////////////////////////////////////

//Listen
app.listen(PORT, (req, res) => {
  console.log('listening...');
})
