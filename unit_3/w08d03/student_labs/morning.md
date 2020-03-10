# SUPER HERO AND VILLIAN GROUP LAB
#### SOLO WORK IS NOT ALLOWED, Join Forces in your breakout rooms

![characters](https://media.git.generalassemb.ly/user/15881/files/9930b280-62f0-11ea-950c-455225ebcde2)


# Set up



1. `cd into the lifting-state-lab folder and run npm install then after install run npm start`
``` bash
$ npm install
$ npm run start
```
## Examine your code.... Read these pre-steps carefully

  1.  In your Src Folder you will see that you have an App.Js file and a components folder with Header.JS and Main.js
  1.  Take Note that Main.js file accepts 3 props and is also accepts children. You should be placing all things you create inside the AppMain Component
  1. Notice also that Header.js and Main.js bothe export components named AppHeader and AppMain. this is on purpose so that you can see that its not the name of the file but the name of the EXPORTED COMPONENT that matters when creating your JSX.
  1. Notice also that you have some assets in this folder that you can use to work on the assignment in the public folder
  1. Your Assets include images and css. The CSS is already added to the page and the js is also please ignore those and do not touch these assets
  1. You do however have images. Use these to your hearts content especially the faces.
  1. Also you have access to bootstrap but its been re-styled with Sass ( your welcome) but the class names from bootstrap work , like row, col-md-6,  col-md-3 , card, jumbotron

## Inside the App.js it should look like this



```js
import React from "react";
import AppHeader from "./components/Header.js";
import AppMain from "./components/Main.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppMain h1="All of these can be dynamic h1" h2="This is the h2" h3="this is the h3">
            <div>This can be your components that you build</div>
        </AppMain>
      </div>
    );
  }
}

export default App;


```

## Inside Header

```js
import React from 'react'


export default class AppHeader  extends React.Component{
  render() {
    return (
      <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg"  color-on-scroll="100">
        <div className="container">
          <div className="navbar-translate">
          <a className="navbar-brand" href="https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Waverider/tree/master/unit_3/w08d03">
            WAVERIDER Class Lab its Lit </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="material-icons">apps</i> Be Creative
                  </a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
```

## Inside Main.js
```js
import React from "react";

export default class AppMain extends React.Component {
  render() {
    return (
      <div>
        <div
          className="page-header header-filter"
          data-parallax="true"
          style={{backgroundImage: `url('assets/img/bg3.jpg')`}}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <div className="brand text-center">
                  <h1>{this.props.h1}</h1>
                  <h3 className="title text-center">{this.props.h3}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main main-raised">
          <div className="container">
            <div className="section text-center">
              <h2 className="title">{this.props.h2}</h2>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

```

### Now what you want to do is add three components to the Components folder
1. Card.js
2. CardList.js
3. CardContainer.js

#### Your Card Component should an div element
#### Your CardList Should Be a UL element
#### Your CardContainer Should Be A Div

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Created 3 Components".
<hr>


### Next Steps
1. Import Your Components in the correct places
1. Think about your architecture Only The CardContainer should go into App.Js
1. Only CardList should go into CardContainer.js
1. Only Card should go into Card List


#### The expected Architecture of Your page is to have A Two Column Container, That Container should have 1 Card List on the left side and the other CardList on the right side, Inside the CardLists they should render a list of data that they received as props and should show an individual Card for each piece of data

#### Sound confusing..... Sound cryptic.... If it does take some time to wireframe it. Don't over think it doesn't need to be styled yet just add the jsx that could produce the expected architecture the same way you would write up your html from unit 1, we'll get our Flexbox (or CSS Grid) on later 

## Hint

```js
import React from "react";
import AppHeader from "./components/Header.js";
import AppMain from "./components/Main.js";
import CardContainer from "./components/CardContainer.js"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppMain h1="All of these can be dynamic h1" h2="This is the h2" h3="this is the h3">
            <CardContainer />
        </AppMain>
      </div>
    );
  }
}

export default App;

```

### note : now how would you set up the other components
### after you think about it and write on a piece of paper and discuss it with your team
# do it...... set them up properly then commit
<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Structured my 3 Components".
<hr>

## Add Data  to src/data.js


```js

const data = [
  {
   name: 'Clark Kent',
   alias: 'Superman',
   alegiance: 'Good',
   temperment: 'Lawful'
  },
  {
    name: 'Diana Prince',
    alias: 'Wonder Woman',
    alegiance: 'Good',
    temperment: 'Neutral'
  },
  {
    name: 'Bruce Wayne',
    alias: 'Batman',
    alegiance: 'Good',
    temperment: 'Chaotic'
  },
  {
    name: 'Tony Stark',
    alias: 'Iron Man',
    alegiance: 'Neutral',
    temperment: 'Lawful'
  },
  {
    name: 'Jon Osterman',
    alias: 'Dr. Manhattan',
    alegiance: 'Neutral',
    temperment: 'Neutral'
  },
  {
    name: 'Bruce Banner',
    alias: 'The Hulk',
    alegiance: 'Neutral',
    temperment: 'Chaotic'
  },
  {
    name: 'Victor Von Doom',
    alias: 'Dr. Doom',
    alegiance: 'Evil',
    temperment: 'Lawful'
  },
  {
    name: 'Unknown',
    alias: 'The Joker',
    alegiance: 'Evil',
    temperment: 'Chaotic'
  },
  {
    name: 'Steve Rogers',
    alias: 'Captain America',
    alegiance: 'Good',
    temperment: 'Lawful'
  },
  {
    name: 'Peter Parker',
    alias: 'Spider-Man',
    alegiance: 'Good',
    temperment: 'Neutral'
  },
  {
    name: 'James "Logan" Howlett',
    alias: 'Wolverine',
    alegiance: 'Good',
    temperment: 'Chaotic'
  },
  {
    name: 'Anakin Skywalker',
    alias: 'Darth Vader',
    alegiance: 'Evil',
    temperment: 'Lawful'
  }
]

```
## import this data in the App.js and pass it down CardContainer and have CardContainer pass it to CardList and have CardList pass one individual person to each card as the prop 'person' so that in Card.js it can use the data as this.props.person

![forceghost](https://media.git.generalassemb.ly/user/15881/files/1c053d80-62f0-11ea-87a1-55c8801db730)
## Arthur appears as a force ghost
```
sorry not going to show you this step, but you have the power to do it ::: vanishes:::
```

## Lets fix our Card.js Component so that it can accept one item of our person prop

```js

import React from 'react'

export default class Card extends React.Component{
  render() {
    return (
<div className="card">
  <div className="card-header">
    <h4 className="card-title">{this.props.person.alias}</h4>
    <p className="category">{`${this.props.person.temperment} ${this.props.person.alegiance}`}</p>
  </div>
  <div className="card-body">
    <p clasName="card-text">
      Name:{this.props.person.name}
    </p>
    <p clasName="card-text">
      Alias:{this.props.person.alias}
    </p>
    <p clasName="card-text">
      Alegiance:{this.props.person.alegiance}
    </p>
    <p clasName="card-text">
      Temperment:{this.props.person.temperment}
    </p>
  </div>
</div>;

    )
  }
}



```

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"Updated My Card.js and Added a Data Element".
<hr>


## Now that we know what our Card.js looks like set up your CardList.js and your CardContainer.js

###### Major hints
1. Card Container doesn't do anything it should just have 2 card lists in it and it should accept props from App.js file
1. Card List should accept props and all it should do is have a MAP in the return of your render function in between the ul tags that renders a card that is wrapped in an li tag.....
1. Card Container is where you should be adding your structure to make this 2 columns for example look at the html snippet below
```html
 <div class="row">
   <div class="col-md-6">
      hmmmm maybe a list would go great here fellow Waverider
   </div>
   <div class="col-md-6">
      hmmmm maybe a list would go great here fellow Waverider
   </div>
</div>
```
![forceghost](https://media.git.generalassemb.ly/user/15881/files/1c053d80-62f0-11ea-87a1-55c8801db730)
## Arthur appears as a force ghost
```js
not going to give you this answer but I have faith in you, remember your training ::: disappears into the force:::
```

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"My CardList and CardContainer work".
<hr>

### Now here comes the magic

1.Make a function in App.js that can change a good character evil, and an evil character good and pass that function down as a prop from App to CardContainer, to CardList to Card

1. Add a button on your Card Component that can 'flip alegiance' by calling that function
2. In Card Container now instead of eachlist being identical ad a filter method that will only show Good Character on the left and Evil Characters on the Right.... but show Neutral Characters on both sides

<hr>
&#x1F534; **Commit your work** <br>
The commit message should read: <br>
"I AM THE MASTER OF MY FATE CAPTAIN OF MY DESTINY I SMITED YOU VILE REACT Even with Arthurs intentionally vague instructions through teamwork and GRIT".<br>
Yes really write that I'll be watching
<hr>

# Hungry for More
### Help your Waverider Shipmates finish
### Use the Material kit Docs and internet images to make this cooler [__material kit__](https://demos.creative-tim.com/material-kit/docs/2.0/components/card.html)
### Make it 3 Columns Good, evil and Neutral or Put only True neutral and Lawful Neutral with Good and Chaotic Neutral with Evil... or something you decide
