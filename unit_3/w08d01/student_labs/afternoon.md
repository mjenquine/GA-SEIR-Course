# Korrila React Receipts

Korilla is a Korean barbecue taco truck that makes thousands of hungry customers happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Build a prototype of this short order receipts tracker.

## Part 1: Get Started

`npx create-react-app korilla` then `cd korilla` then `rm -rf .git` (since we're already in the class repo) and follow the notes from class/lab to create an App component that renders
 an `h1` with some text inside it.\
Remember to `npm start` to start your server.\
Remember to `git add` and `git commit`

NOTE: This markdown is using `import React, { Component } from 'react';` to import React, instead of `import React from 'react'`. So instead of using `class App extends React.Component` it uses `class App extends Component`. Feel free to do it either way! Find what feels best to you.


## Part 2: Sample Receipts

You'll be rendering some sample receipts:

```js
const receipts =
[
      {
        person: 'Karolin',
        order: {
          main: 'Burrito',
          protein: 'Organic Tofu',
          rice: 'Purple Rice',
          sauce: 'Green Crack',
          toppings: [
            'Baby Bok Choy', 'Cucumber Kimchi'
          ],
          drink: 'Korchata',
          cost: 22
        },
        paid: false
    },
    {
      person: 'Brendan',
      order: {
        main: 'Rice Bowl',
        protein: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korilla',
        toppings: [
          'Yuzu Pickled Sweet Pepper', 'Kale'
        ],
        drink: 'Korchata',
        cost: 19
      },
      paid: false
  },
  {
      person: 'Ayla',
      order: {
        main: 'Salad Bowl',
        protein: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: [
          'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
        ],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
      },
      paid: true
    }
]
```

- `touch src/receipts.js`
- Add and export the above data
- `console.log(receipts)` to make sure you're getting the data
- In app.js add the receipts to the state of the app:


```js
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
     receipts: receipts,
    }
  }
  ```


- Make a Receipt component that renders the first receipt's
  - person
  - order
      - main
      - protein
      - rice
      - sauce
      - drink
      - cost

- TIP: Run a console.log between the render and return statements in your Receipts component to help locate your data

```js
class Receipt1 extends Component {
    render(){
        console.log(this.props);
        return(
            <p>Return statements cannot be empty</p>
        )
    }
}
```

Hungry for More: render the toppings


- Make two more Receipt components so that you get a view like this (a little css provided for clarity, but not required)

![korilla receipts rendered Mark](https://i.imgur.com/27V4KW8.png)

<!-- ![korilla receipts rendered Jerrica ](https://i.imgur.com/QMwgKOK.png) -->

<details><summary> Hint 1</summary>

![the solution](https://i.imgur.com/1RpSNno.png)

</details>

<details><summary> Hint 2 </summary>

![the solution](https://i.imgur.com/awhPlj1.png)

</details>


### Part 3: Conditionally Render the receipts if they have been paid or not

Right now, all the receipts are not paid ( `paid: false`) except for one.

- Set up a ternary operator to display the receipt if it has not been paid.

- Then check your app and make sure only the receipts that have not been paid are showing.


![Matt has settled his bill](https://i.imgur.com/90oM59b.png)


To see the `React` tab in the Dev Console, you have to download it as a [Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)\
Your tab may say `React` or it may say `Components`

<details><summary> Hint 3 </summary>

![the solution](https://i.imgur.com/jpE9aUX.png)

</details>


## Part 4: Refactor for Dynamic Rendering

Right now we only have 3 receipts, so it's easy enough to hardcode them, but what if we had 30 receipts?

- Update your code so it renders the same, but instead of hard coding 3 receipts, it maps over the array and uses only one Receipt component.


<details><summary> Hint 4 </summary>

![the solution](https://i.imgur.com/DuXGPyR.png)

</details>

## Hungry For More

You'll have to read ahead in the notes...

- Add a click event on the receipt that changes the value of paid from false to true. Once clicked the receipt should immediately disappear from the browser view

You'll have to research on your own...

- How do you style react components within react?

[A nice place to start](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822)

But also, [why would one style components...rather than use a good old css file?](https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b)
