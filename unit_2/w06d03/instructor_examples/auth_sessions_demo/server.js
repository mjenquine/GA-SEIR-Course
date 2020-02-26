const bcrypt = require('bcrypt')
const express = require('express')
const session = require('express-session')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)

app.get('/', (req, res) => {
  res.send(req.session.anyProperty)
})
// set any property - can access from other routes see / route
app.get('/any', (req, res) => {
  req.session.anyProperty = 'any value'
  res.redirect('/')
})

// to destroy the session use the .destroy method
app.get('/destroy-route', () => {
  //any route will work
  req.session.destroy(err => {
    if (err) {
      //do something if destroying the session fails
    } else {
      //do something if destroying the session succeeds
    }
  })
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})

// bcrypt in action
const yourPassword = 'password1234'
const yourHashedPassword = bcrypt.hashSync(yourPassword, bcrypt.genSaltSync(10))

console.log(yourHashedPassword)

// check if password and hashed password match
console.log(bcrypt.compareSync(yourPassword, yourHashedPassword))
