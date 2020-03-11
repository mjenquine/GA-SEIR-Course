import React, {Component} from 'react';
import Header from './Header.js'
import Score from './Score.js'
import Game from './Game.js'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      url: "http://jservice.io/api/random",
      score: 0,
      jeopardyQuestion: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (event) {
    this.setState({})
  }



  render () {
    return (
      <div>
        <Header />
        <Score />
        <Game />
      </div>
    )
  }
}

export default App;
