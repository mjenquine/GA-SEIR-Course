// Dependencies
import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
// Components
import './App.css'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Location from './components/Location'
import Menu from './components/Menu.js'
import Navigation from './components/Navigation.js'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Route path='/' exact component={Menu} />
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact} />
          <Route path='/locations' component={Location} />
        </div>
      </Router>
    )
  }
}

export default App
