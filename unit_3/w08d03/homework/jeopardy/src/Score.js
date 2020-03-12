import React, {Component} from 'react';

class Score extends Component {
  render () {
    return (
      <div>
        <div>
          <div>Score: {this.props.score}</div>
        </div>
        <div>
          <button onClick={() => {this.props.decreaseScore(this.props.score)}}>Decrease</button>
          <button onClick={() => {this.props.increaseScore(this.props.score)}}>Increase</button>
          <button onClick={() => {this.props.resetScore(this.props.score)}}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Score;
