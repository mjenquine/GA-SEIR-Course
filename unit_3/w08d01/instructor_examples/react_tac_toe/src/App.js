import React from 'react'
// const React = require('react')
import Header from './components/Header'
import Player from './components/Player'
import Board from './components/Board'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Player whichPlayer="X" />
        <Player whichPlayer="O" />
        <Board />
      </div>
    )
  }
}

// module.exports = App
export default App
