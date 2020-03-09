# React Static Components

## About this Build

The end (of the program) is near. You've been showing off your portfolio and projects to your friends, family and classmates and they all say "It's fine. I like it!" But you want more insight.

So you decide to look into some analytical tools...but wow! They are expensive! You decide to make your own.

You visualize a dashboard with components for reviews, average rating, sentiment analysis and website visitors

![Dashboard Wireframe](https://i.imgur.com/5mCo2tV.png)

Try to recreate this wireframe with React. Be sure to create a few components (e.g. app, sidebar, reviews, average rating, sentiment analysis, website visitors).


## Get Started

### Set up
- `npx create-react-app dashboard`
- `cd dashboard `
- `rm -rf .git` (since we're already in the class repo)
- `atom .`
- `npm start` to start your server

**app.js**

- render an `h1` tag using react to test it:

```js
class App extends React.Component {
  render(){
    return (
      <h1>Hello World!</h1>
    )
  }
}
```


### Dark Theme!

Keep going! Add more details, add some css

![Cool Looking Dashboard](https://i.imgur.com/3kPnrAq.png)

Dashboard example found here: https://medium.muz.li/30-handpicked-excellent-dashboards-347e2407a057
