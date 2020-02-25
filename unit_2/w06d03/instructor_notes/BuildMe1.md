# Build Auth & Sessions into our Fruits App

## Lesson Objectives

- add sessions and auth on top of our fruits build

## Set up

- cd into the starter code, make sure you are on the same level as `package.json`
- `npm install` to install dependencies (express, ejs, method-override, mongoose)

## Set up environmental variables

We need a way to protect our sensitive information and a way to store environmental variables that are specific to our computer (in contrast to a co-workers computer or the environment in a cloud service).

In our class repo, at the route we have a `.gitignore` file. This file tells git which files to never track. In there it states to never track `node_modules` nor `.env` - that way our values stay safely on our machines.

- in `.env` let's set up the environmental variables for your port and mongo connection string

- `touch .env`
- `npm install dotenv`

in `.env`

```yml
PORT=3000
MONGODBURI=mongodb://localhost:27017/fruits_auth
```

**IMPORTANT** this is NOT a JavaScript file.

- No spaces!
- No semi-colons!
- No quotes!

- In `server.js` - under configuration
- `require('dotenv').config()`

The variables will be accessed by `process.env`

```js
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI
```

We should now be able to run nodemon

![](https://i.imgur.com/GAwB5h5.png)

- Go to `/fruits/setup/seed` to seed some data
- Make a fruit
- Update a fruit
- Delete a fruit
