This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Download, make sure you're in the same folder as `package.json` in terminal
- run `npm i`
- run `npm start`

## React Router

When we create a single page application, our route never changes. So if we want to send someone a link to the contact page of our site, we can't. It will always default to the primary view.

Additionally, managing different views using ternary operators can get really complex very quickly.

Luckily for us, we have React Router to help us out

[React Router Docs](https://reacttraining.com/react-router/web/guides/quick-start)

We'll just go over making a few different views. But you can use router for redirects, auth, custom links, 404s, and more.

- `install react-router-dom`

**App.js**

```js
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
```

Wrap code in `<Router>`

```js
return (
  <Router>
    <div className="container">
      <About />
      <Contact />
      <Location />
      <Menu />
    </div>
  </Router>
);
```

Add Router Links:

```js
<div className="container">
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/locations">Locations</Link>
  </nav>
```

Add Route components

```js
<Route path="/" exact component={Menu} />
<Route path="/about" component={About} />
<Route path="/contact" component={Contact} />
<Route path="/locations" component={Location} />
```

Entire Code:

```js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Location from "./components/Location";
import Menu from "./components/Menu.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/locations">Locations</Link>
          </nav>
          <Route path="/" exact component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/locations" component={Location} />
        </div>
      </Router>
    );
  }
}

export default App;
```
