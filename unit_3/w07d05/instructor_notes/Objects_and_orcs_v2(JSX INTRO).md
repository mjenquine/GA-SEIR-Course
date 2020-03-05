# LETS PLAY OBJECTS AND ORCS Version 2


![ga](../../../ga_cog.png)


<hr>
Title: OBJECTS AND ORCS Version 2 with JSX<br>
Type: Lesson<br>
Duration: 2hrs <br>
Creator: Arthur Bernier Jr<br>
Topics: JSX, PROPS aka Properties and data manipulation<br>
<hr>

## Begin with the End in Mind
1. What is JSX
2. Why is JSX Powerful
3. What is REACT
4. Refresher on Classes
5. Build a quick website using classes and JSX with Experss React Views
6. Understanding the Power of Express

# What is JSX? 
JSX stands for JavaScript XML. With React, it's an extension for XML-like code for elements and components. Per the React docs: JSX is a XML-like syntax extension to ECMAScript without any defined semantics.

# What is REACT ?
 A JavaScript library for building user interfaces built by facebook. It's everything JQuery wished it was.

# express-react-views

This is an [Express][express] view engine which renders [React][react] components on server. It renders static markup and *does not* support mounting those views on the client.

This is intended to be used as a replacement for existing server-side view solutions, like [jade][jade], [ejs][ejs]  (Like we have been using), or [handlebars][hbs].


## Usage

```sh
npm init -y && npm install express express-react-views react react-dom
```

**Note:** You must explicitly install `react` as a dependency.

### Add it to your app.

```js
// server.js
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); // we didn't have to do this before because Express can read EJS by default so no need to reassign the view engine

// routes here above listen

app.listen(port, (req, res) => {
  console.log("listening to the magical journey you will embark on in OBJECTS AND ORCS...")
})

```


### Views

```
mkdir views
touch views/Adventurer.jsx
```

Under the hood, [Babel][babel] is used to compile your views to be code compatible with your current node version, using the [react][babel-preset-react] and [env][babel-preset-env] presets by default. Only the files in your `views` directory (i.e. `app.set('views', __dirname + '/views')`) will be compiled.

Your views should be node modules that export a React component. Let's assume you have this file in `views/Adventurer.jsx`:

```js
const React = require('react');

class Adventurer extends React.Component {
  render() {
    return <div>Hello My Name is {this.props.name}</div>;
  }
}

module.exports = Adventurer;
```

### Routes

Your routes would look identical to the default routes Express gives you out of the box.


```js
// routes here above listen

app.get('/', (req,res) => {
res.render('Adventurer', {name:'King Arthur the Brilliant'});
})
```

**That's it!** Layouts follow really naturally from the idea of composition.

### Layouts

Simply pass the relevant props to a layout component.

`views/layouts/Mission.jsx`:
```js
const React = require('react');

class Mission extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>
          Our Hero is Currently on Mission : {this.props.mission}
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = Mission;
```

`views/Adventurer.jsx`:
```js
const React = require('react');
const Mission = require('./layouts/Mission');

class Adventurer extends React.Component {
  render() {
    return (
      <Mission title={this.props.title} mission={this.props.mission}>
        <div>Hello {this.props.name}</div>
      </Mission>
    );
  }
}

module.exports = Adventurer;
```

### Where does my data come from?

All "locals" are exposed to your view in `this.props`. These should work identically to other view engines like we did with EJS, with the exception of how they are exposed. Using `this.props` follows the pattern of passing data into a React component, which is why we do it that way. Remember, as with other engines, rendering is synchronous. If you have database access or other async operations, they should be done in your routes.

# Lets Give Our Adventurer some stuff

```javascript
app.get('/', (req,res) => {
res.render('Adventurer', {name:'King Arthur the Brilliant', title: "the song of the GOAT", mission: "to be the very best like no one ever was..... dun dun dun dun"});
})
```


# Lets make a dynamic route that names our guy and sets the data

```javascript
app.get('/:name/:title/:mission', (req,res) => {
res.render('Adventurer', {name: req.params.name , title: req.params.title, mission: req.params.mission});
})
```

# Lets give him tools also and allow for spaces in our name, title and mission
```javascript
app.get('/:name/:title/:mission/:tools', (req,res) => {
 const name = req.params.name.split('_').join(' ')
 const title = req.params.title.split('_').join(' ')
 const mission = req.params.mission.split('_').join(' ')
 const tools = req.params.tools.split('_').join(' ').split(',')
 res.render('Adventurer', {name: name , title: title, mission: mission, tools : tools});
})
```

# Lets loop over our data in our jsx file and display it on the page
```
 class Adventurer extends React.Component {
  render() {
    return (
      <Mission title={this.props.title} mission={this.props.mission}>
        <div>Hello {this.props.name}</div>
        <ul>
         <h2> The magical tools of {this.props.name}</h2>
          { this.props.tools.map((tool, index)=> {
            return (<li key={index}>{tool}</li>)
          })}
        </ul>
      </Mission>
    );
  }
 }
 module.exports = Adventurer;
```

# Now that we see a little bit of what we can do with JSX lets rebuild the fruits app using JSX
