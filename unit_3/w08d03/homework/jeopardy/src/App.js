import React, {Component} from 'react';
import Header from './Header.js'
import Score from './Score.js'
import Game from './Game.js'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      score: 0,
      jeopardyQuestion: [],
      isToggleOn: true
    }
    this.getQuestion = this.getQuestion.bind(this)
    this.decreaseScore = this.decreaseScore.bind(this)
    this.increaseScore = this.increaseScore.bind(this)
    this.resetScore = this.resetScore.bind(this)
    this.handleClick = this.handleClick.bind(this)
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
            this.setState(
              {
                jeopardyQuestion: [response],
                isToggleOn: true
              }
            )
            console.log(this.state.jeopardyQuestion);
          }
        ).catch (
          (err) => {
            console.error(err)
          }
        )
      }
    )
    console.log(this.state.isToggleOn);
  }
  decreaseScore (score) {
    this.setState({score: score - 1})
  }
  increaseScore (score) {
    this.setState({score: score + 1})
  }
  resetScore (score) {
    this.setState({score: 0})
  }
  handleClick (toggle) {
    this.setState({isToggleOn: !this.state.isToggleOn})
    console.log(this.state.isToggleOn);
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
          isToggleOn={this.state.isToggleOn}
          getQuestion={this.getQuestion}
          handleClick={this.handleClick}
          />
      </div>
    )
  }
}

export default App;
