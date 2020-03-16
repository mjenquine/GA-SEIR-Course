import React from 'react'
import {Link} from 'react-router-dom'

class Navigatation extends React.Component {
  render () {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/locations" >Locations</Link>
      </nav>
    )
  }
}

export default Navigatation
