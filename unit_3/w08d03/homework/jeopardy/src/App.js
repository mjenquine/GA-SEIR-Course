import React, {Component} from 'react';
import Header from './Header.js'
import Score from './Score.js'
import Game from './Game.js'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      score: 0,
      jeopardyQuestion: []
    }
    this.getQuestion = this.getQuestion.bind(this)
    this.decreaseScore = this.decreaseScore.bind(this)
  }
  getQuestion (event) {
    this.setState({
      url: "http://jservice.io/api/random"
      },
      () => {
        fetch(this.state.url)
        .then(response => {
          return response.json()
        })
        .then(
          (response) => {
            this.setState({jeopardyQuestion: [response]})
            console.log(this.state.jeopardyQuestion);
          }
        ).catch (
          (err) => {
            console.error(err)
          }
        )
      }
    )
  }
  decreaseScore (prevState) {
    this.setState({score: prevState.score - 1})
  }
  increaseScore (prevState) {
    this.setState({score: prevState.score + 1})
  }
  resetScore (prevState) {
    this.setState({score: 0})
  }


  render () {
    return (
      <div>
        <Header />
        <Score
          score={this.state.score}
          decreaseScore={this.decreaseScore}
          increaseScore={this.increaseScore}
          resetScore={this.resetScore}
          />
        <Game
          jeopardyQuestion={this.state.jeopardyQuestion}
          getQuestion={this.getQuestion}
          />
      </div>
    )
  }
}

export default App;
