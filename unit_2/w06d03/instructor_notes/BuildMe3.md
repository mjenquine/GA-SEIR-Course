# Build Auth & Sessions into our Fruits App

## Lesson Objectives

- add sessions controller (no model - why?)
- add logic to check password

## Set up

- on same level as package.json
- `npm install express-session`
- configure express session

in `server.js`

in dependencies

```js
const session = require('express-session')
```

in middleware section

```js
app.use(
  session({
    secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
    resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
    saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
  })
)
```

in `.env` add

```yml
SECRET=FeedMeSeymour
```

- We only need the routes for our user
- the new form to log in
- the post route to create a new session
- the delete route to destroy a session

### Sessions Controller

in `server.js`

```js
const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)
```

in `controllers/sessions_controller.js`

```js
const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs', { currentUser: req.session.currentUser })
})

// on sessions form submit (log in)
sessions.post('/', (req, res) => {
  // username is found and password matches
  // successful log in

  // username is not found - who cares about password if you don't have a username that is found?
  // unsuccessful login

  // username found but password doesn't match
  // unsuccessful login

  // some weird thing happened???????

  // Step 1 Look for the username
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    // Database error
    if (err) {
      console.log(err)
      res.send('oops the db had a problem')
    } else if (!foundUser) {
      // if found user is undefined/null not found etc
      res.send('<a  href="/">Sorry, no user found </a>')
    } else {
      // user is found yay!
      // now let's check if passwords match
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        // add the user to our session
        req.session.currentUser = foundUser
        // redirect back to our home page
        res.redirect('/')
      } else {
        // passwords do not match
        res.send('<a href="/"> password does not match </a>')
      }
    }
  })
})

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = sessions
```

## Refactoring

- in every get route let's give access to the user

add the following to

```js
  ,
  currentUser: req.session.currentUser
```

- fruits.get/new
- fruits.get/:id/edit (update)
- fruits.get/:id (show)
- fruits.get/ (index)
- sessions.get/new
- users.get/new

Let's update the nav partial

```html
<ul class="right">
  <li><a href="/fruits/new">Create a new Fruit</a></li>
  <% if (currentUser) { %>
  <li>Welcome <%= currentUser.username %></li>
  <li>
    <form action="/sessions?_method=DELETE" method="POST">
      <input type="submit" value="Log Out" class="btn-small red" />
    </form>
  </li>
  <% } else { %>
  <li><a href="/users/new">Sign Up</a></li>
  <li><a href="/sessions/new">Log In</a></li>
  <% } %>
</ul>
```

Now, whenever we are logged in the nav bar should look like this

![](https://i.imgur.com/beJV42l.png)
