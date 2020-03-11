# Doctor Who's Police Box

![10th Doctors Box](https://www.bigchiefstudios.co.uk/media/product/feature/doctor-who/product-feature-10th-doctor-tardis.jpg)

## Objectives

Learn about Thinking in React, use the activity to apply what you've learned.

Doctor Who's Police Box is a T.A.R.D.I.S (Time and Relative Dimension In Space), a fantastical space ship that can fly through time and space and other mind-bending-ly impossible situations. It can go _anywhere_.

Today, you're going to help the T.A.R.D.I.S. navigate through a React App in the form of an object

```js
tardis = {
  name: 'Time and Relative Dimension in Space',
  caps: false,
}
```

## Thinking in React
- By now, it should be pretty obvious that React is a pretty different approach than EJS.

- Take a few minutes to read over
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- Do the activity and reread this article and try to figure out how the pieces go together.
 

To aid in visualization here is some css.

Every div will have a blue border and have some space around it for easy distinction between divs.

```css
@import url('https://fonts.googleapis.com/css?family=Poppins');

body {
  margin: 1em;
  padding: 1em;
  font-family: 'Poppins', sans-serif;
  background: #FEFFE9;
  text-align: center;
}


div{
  margin: auto;
  width: 80%;
  box-shadow: 0 0 8px dodgerblue;
  padding: 1em;
  background: white;
}
```
![css visual](https://i.imgur.com/3e0aPea.png)

## Top Level
- One `div`, you hard coded it in the html

## App Level
- Set up `ReactDOM.render()`
- Create an `App` component class
- Set initial state by using a constructor and passing in props. [As per official React Docs](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
- render a `div`
- inside the `div`, put an `h3` that will render the `name` property from `this.state`

T.A.R.D.I.S. properties inside `this.state` object:

```js
tardis: {
  name: 'Time and Relative Dimension in Space',
  caps: false,
}

```

Check your State in React Dev Tools:
![](https://i.imgur.com/MXGaT1M.png)

- Add a function that gets called on click and changes the text

```js
changeIt (text) {
  if (this.state.tardis.caps) {
    this.setState({
      tardis: {
        name: text.toLowerCase(),
        caps: false
      }
    })
  } else {
    this.setState({
      tardis: {
        name: text.toUpperCase(),
        caps: true
      }
    })
  }
}

```

- On click, the text will change from caps to lower case and change the caps property.

- Get the click function to work
## New Components
- These new components tiny and you'll be working between them. It's ok to do this all in one file `App.js` whether or not you are working with CRA.

### Create a New Class Component `DivOne`
- have it render a div
- move the h3 to inside the div in this component
- work on passing the data from state down
- work on getting the click function work properly

### Create a New Class Component `DivTwo`
- have it render a div
- move the h3 to inside the div in this component
- work on passing the data from DivOne down
- work on getting the click function to work properly

### Create a New Class Component `DivThree`
- have it render a div
- move the h3 to inside the div in this component
- work on passing the data from DivTwo down
- work on getting the click function to work properly


### Create another `DivThree` Inside `DivTwo`
- how should it render?
- will the function affect one or both divThrees?
- should it affect one or both?

<details><summary>Hint</summary>

```
The Data Flows Down
Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components:
```
[Thinking in React: The Data Flows Down](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)



</details>

- Thinking in React: where should state go? Topmost component possible? Bottom Most component possible? What is the best practice
- refactor your code so that each tardis is updating independent of the other one, if it isn't already

![nearly finished](https://i.imgur.com/efZ6fZG.png)

## Write it out

Thinking in React means planning. Don't code the following, write it out on paper and pseudocode it - you don't have to turn it in, but it can really help. Some of the details are vague. If you're on the job and ended up with these vague details what would you do? Solve it on your own? Ask someone?

- Which doctor is traveling with us? The doctors are currently numbered 1- 13
- set a property `theDoctor` to render 1 inside the DivThree component - is this 'ok'? Or should this property go in App? Try to do some research to find out. Just because you can doesn't mean you should. And sometimes you should really follow best practices. Which are... what for react?

- When The Doctor is gravely injured he can regenerate rather than die and becomes the next doctor
- Write a function that increases The Doctor's number called `regenerate` (when and how is this function called?)
- Where does it go? In App? In DivThree? DivTwo?
- How do you pass this function around?
- Is there a way to call this function in the App Component if you've declared it further down?
- Just because you might be able to doesn't mean you should.
- What does Thinking in React mean?


- After considering the above, take time to read [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) again

Revisit:
- How is this different than EJS?
- What are the pros and cons?
- What are the best practices?
- Why do we build and refactor so much with React?
