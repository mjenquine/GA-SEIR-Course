//Dependencies
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const session = require('express-session')

//Configuration
require('dotenv').config()
const app = express()
const db = mongoose.connection
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI

//Middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

//Database Connection
mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log('the connection with mongod is established at', mongodbURI)
  }
)

// Controllers
const logsController = require('./controllers/logs_controllers.js')
app.use('/logs', logsController)

const sessionsController = require('./controllers/sessions_controllers.js')
app.use('/sessions', sessionsController)

const userController = require('./controllers/users_controllers.js')
app.use('/users', userController)

//Index Route
app.get('/', (req, res) => {
  Log.find({}, (error, allLogs) => {
    if (error) {
      res.send('Ooops')
    }
    res.render('index.ejs', {
    logs: allLogs
    })
  })
})
//Listen
app.listen(PORT, (req, res) => {
  console.log('listening...');
})
