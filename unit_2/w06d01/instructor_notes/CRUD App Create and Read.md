![ga](../../../ga_cog.png) <br>
# CRUD App with Mongoose - Create and Read
## What the CRUD ?

---

    Title: What the Crud
    Type: 2 Day Mini Project
    Instructor: Arthur Bernier Jr 
    Topics: Mongoose with Express 

---

## Beginning with the End in Mind ( Our Terminal Learing Objectives

1. Initialize a directory
1. Start express
1. Create New Route
1. Create Create Route
1. Connect Express to Mongo
1. Create Fruits Model
1. Have Create Route Create data in MongoDB
1. Create Index Route
1. Have Index Route Render All Fruits
1. Have Create Route redirect to Index After Fruit Creation
1. Create Show Route
1. Have Index Page Link to Show Route
1. Create show.ejs

# Explanation ....
#### Current Technology Stack
    1. NodeJS
    2. ExpressJS
    3. MongoDB
    4. Mongoose
    5. Embedded Javascript
#### What do these 5 Technologies do?
   #### 1. __NodeJS__ is primarily used for non-blocking, event-driven servers, because of its single-threaded nature.
    It's used for traditional web sites like the one we are mocking up and back-end API services (
    that we will build in unit 3), but was designed with real-time, push-based architectures in mind. 
    You can use Node to create files, serve files, run code in the terminal etc. 
    Their is no hard limit to what you can do, but everything we are doing is currently 
    running using node. We use node when we run NPM Install to go to the npm directory and 
    fetch the files we need and save them to our computer. We use node in order to use the `require` 
    function to use Javascript written in other files in the files we are currently inside.
    
   #### 2. ExpressJS is built on top of the node. js framework and helps in fast-tracking development 
    of server-based applications. Routes are used to divert users to different parts of the web
    applications based on the request made. Just like JQuery makes use of Client Side Javascript 
    to make dom manipulation simple, Express lets us create web servers in minutes by doing alot 
    of the NodeJS processes in the background.
    
   #### 3. MongoDB is used to store data in such a way that it provides high performance, high 
    availability, and automatic scaling. MongoDB is extremely simple to install and implement.
    MongoDB uses JSON or BSON documents to store data, and we can interact with it using the shell
    
   #### 4. Mongoose is used to make a quick way that we can connect any Node.js application to MongoDB.
    If you remember we had to open up the mongo shell to talk to MongoDB. That would be highly 
    inefficient. So instead Mongoose wrote some Node.js code that can connect with MongoDB's 
    shell in the background for us and send those MongoDB commands to the MongoDB shell for 
    us and all we have to use is write fairly simple JavaScript commands to tell it to do that.
    
   #### 5. EJS uses the flexibility of JS to create your html using Javascript on the server side with 
    NodeJS and then delivers it to the browser fully formed. Unlike JQuery which waits for the 
    document to load in the browser and then changes the rendered document. EJS can be used with
    JQUERY and ClientSideJS by including script tags with links to js files. These files should be
    used to do things like add event listeners that listen for user input via clicks, mousemoves, 
    hover etc. to change the page, but shouldn't be used to create the page from scratch. This is 
    primarily for SEO reasons because when search engines like Google reach a page they don't wait 
    for JQUERY to add content, if they don't see the content immediately they won't index it.
    
# Demonstration ....
### All of our code is held together by Node.JS and nothing in your files is executed until you tell Node.JS to run the sequence of functions that you have established in your server.js file. The server.js is the brain of your entire application, and when you say `node server.js` it is the same as when you typed the command `node app.js`.

```javascript
// old app.js
console.log('This is my app.js, i just have 1 command')
```
#### We could run this piece of code with Node.js

```javascript
// otherfile

module.exports = {
    greeting: 'Whats really good'
}
```

### using node we can import that other file with require

``` javascript
// old app.js
console.log('This is my app.js, i just have 1 command')

const object = require('./otherfile.js')

console.log(`${object.greeting}`)
```

### we could also use nodejs to make a file with the data

``` javascript
// old app.js
console.log('This is my app.js, i just have 1 command')

const object = require('./otherfile.js')

console.log(`${object.greeting}`)

const fs = require('fs')

fs.writeFile('anotherfile.txt', object.greeting, (err) => {
    if (err) console.log(err);
    console.log(`We made our file called another.txt`)
  })
```

### Node will do whatever we tell it to do within reason.


### In our standard CRUD application we have routes some are presentational and some are functional
#### Presentational Routes Note: all presentation routes are get requests
1. Index ( Shows a list of all of our stored data) a blog homepage
![image](https://user-images.githubusercontent.com/38284764/75123109-86707980-5672-11ea-802a-b936206d6a24.png)
2. Show ( Shows one individual piece of data) a blog read page
![image](https://user-images.githubusercontent.com/38284764/75123110-8e301e00-5672-11ea-95c0-2dbdf7307e6f.png)
3. New ( A place wher a non coder can add information to the database by filling out a form)
![image](https://user-images.githubusercontent.com/38284764/75123114-98eab300-5672-11ea-86d4-bef764b90a55.png)
4. Edit ( A place where a non coder can edit information in the database)
![image](https://user-images.githubusercontent.com/38284764/75123113-92f4d200-5672-11ea-861c-ed89dd48a261.png)
#### Functional Routes Not : no functional routes are get requests
1. Create ( Makes a post request and adds a new piece of data to our database) a form using this route as an action will exist on the `NEW` route's attached EJS file
2. Update ( makes a put request and changes a piece of data in our database) a form on the `EDIT` routes attached ejs file will have the action to use this route.
3. Delete ( makes a delete request and removes data from the database) a form on the `index` routes EJS file will have the action to call this route.

#### Note just like you could make a function in Jquery that could create a div, and you could make a function that also could change that div, your routes are made the same way. Some routes will render a page to the user, some will perform a backend server functionality, but they all are pieces of code that we call. Whenever a user makes a request express asks 2 questions

# What was the HTTP method : Get, Post, Put, Delete
# What was the path : i.e. /fruits , /fruits/0, /fruits/new
# After express gathers that information it then runs the functionality that matches that method and path

![image](https://user-images.githubusercontent.com/38284764/75124736-161c2500-567f-11ea-9130-2b35bb6f079b.png)


#### We are making a rudimentary version of this


# Imitation ....
## Lets Rebuild the fruits app with our Current Technology Stack.

1. Create a directory for the app called `fruits` in `student_examples` and `cd` into it
1. `npm init`
1. `npm install express`
1. `touch server.js`
1. Edit package.json to have `"main": "server.js",`

## Start express

```javascript
const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('listening');
});
```

## Create New Route

```javascript
app.get('/fruits/new', (req, res)=>{
    res.send('new');
});
```

1. `mkdir views`
1. `npm install ejs`
1. `touch views/new.ejs`
1. Create the view

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>New Fruit page</h1>
        <form action="/fruits" method="POST">
            Name: <input type="text" name="name" /><br/>
            Color: <input type="text" name="color" /><br/>
            Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
            <input type="submit" name="" value="Create Fruit"/>
        </form>
    </body>
</html>
```

Render the view

```javascript
app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});
```

## Create Create Route

```javascript
app.post('/fruits/', (req, res)=>{
    res.send('received');
});
```

1. Use express.urlencoded in server.js:

```javascript
app.use(express.urlencoded({extended:true}));
```

Check to see if req.body works:

```javascript
app.post('/fruits/', (req, res)=>{
    res.send(req.body);
});
```

Format data properly

```javascript
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    res.send(req.body);
});
```

## Connect Express to Mongo

1. `npm install mongoose`
1. Inside server.js:

```javascript
const mongoose = require('mongoose');

//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
```

## Create Fruits Model

1. `mkdir models`
1. `touch models/fruits.js`
1. Create the fruit schema

```javascript
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
```

## Have Create Route Create data in MongoDB

Inside server.js:

```javascript
const Fruit = require('./models/fruits.js');
//... and then farther down the file
app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.send(createdFruit);
    });
});
```

## Create Index Route

```javascript
app.get('/fruits', (req, res)=>{
    res.send('index');
});
```

`touch views/index.ejs`

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Fruits index page</h1>
        <nav>
            <a href="/fruits/new">Create a New Fruit</a>
        </nav>
    </body>
</html>
```

Render the ejs file

```javascript
app.get('/fruits', (req, res)=>{
    res.render('index.ejs');
});
```

## Have Index Route Render All Fruits

```javascript
app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});
```

Update the ejs file:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <nav>
            <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        <h1>Fruits index page</h1>
        <nav>
            <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        <ul>
            <% for(let i = 0; i < fruits.length; i++){ %>
                <li>
                    The <%=fruits[i].name; %> is  <%=fruits[i].color; %>.
                    <% if(fruits[i].readyToEat === true){ %>
                        It is ready to eat
                    <% } else { %>
                        It is not ready to eat
                    <% } %>
                </li>
            <% } %>
        </ul>
    </body>
</html>
```

## Have Create Route redirect to Index After Fruit Creation

Inside the create route

```javascript
Fruit.create(req.body, (error, createdFruit)=>{
    res.redirect('/fruits');
});
```

## Have Index Page Link to Show Route

```html
<li>
    The
    <a href="/fruits/<%=fruits[i].id; %>">
        <%=fruits[i].name; %>
    </a>
    is  <%=fruits[i].color; %>.
    
    <% if(fruits[i].readyToEat === true){ %>
        It is ready to eat
    <% } else { %>
        It is not ready to eat
    <% } %>
</li>
```

## Create Show Route

```javascript
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.send(foundFruit);
    });
});
```

## Create show.ejs

1. `touch views/show.ejs`
1. Add HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <h1>Fruits show page</h1>
        The <%=fruit.name; %> is  <%=fruit.color; %>.
        <% if(fruit.readyToEat === true){ %>
            It is ready to eat
        <% } else { %>
            It is not ready to eat
        <% } %>
        <nav>
            <a href="/fruits">Back to Fruits Index</a>
        </nav>
    </body>
</html>
```

Render the ejs

```javascript
app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('show.ejs', {
            fruit:foundFruit
        });
    });
});
```
