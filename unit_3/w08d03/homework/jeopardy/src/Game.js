import React, {Component} from 'react';

class Game extends Component {
  render () {
    return (
      <div>
        <div>
          <div>Let's play!</div>
        </div>
        <div>
          <button onClick={this.props.getQuestion}>Get Question</button>
        </div>
        <div>
          Category:
          {
            this.props.jeopardyQuestion.map((arr, index) => {
              return (
              <span key={index}>{arr[0].category.title}</span>
              )
            })
          }
        </div>
        <div>
          Points:
          {
            this.props.jeopardyQuestion.map((arr, index) => {
              return (
              <span key={index}>{arr[0].value}</span>
              )
            })
          }
        </div>
        <div>
          Answer:
          {
            this.props.jeopardyQuestion.map((arr, index) => {
              return (
              <span key={index}>{arr[0].question}</span>
              )
            })
          }
        </div>
        <div>
          Question:
          {this.props.isToggleOn
            ? <button onClick={this.props.handleClick}>Click to Reveal Question</button>
            : this.props.jeopardyQuestion.map((arr, index) => {
                return (
                  <span key={index}>{arr[0].answer}</span>
                )
              })
          }
        </div>
      </div>
    )
  }
}

export default Game;
