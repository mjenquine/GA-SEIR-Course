import React from 'react'
// import './App.css'
import data from '../data.js'
import Water from './Water.js'


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      waters: []
    }
  }
  componentDidMount () {
    this.setState({waters: data})
  }

  render () {
    return (
      <>
        <h3>Menu</h3>
        <div className="menu">
          {this.state.waters.map(water=> {
            return(
              <Water water={water} key={water.id}/>
            )
          })}
        </div>
      </>
    )
  }
}

export default Menu
