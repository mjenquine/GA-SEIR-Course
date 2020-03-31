import React, { Component } from 'react'
import Daters from './components/Hello'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>React & Rails 4eva!</h1>
        </header>
        <Daters />
      </div>
    )
  }
}
