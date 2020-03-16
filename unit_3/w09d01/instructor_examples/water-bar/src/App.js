import React from 'react'
import './App.css'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Location from './components/Location'
import Menu from './components/Menu.js'
import Navigation from './components/Navigation.js'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Navigation />
        <About />
        <Contact />
        <Location />
        <Menu />
      </div>
    )
  }
}

export default App
