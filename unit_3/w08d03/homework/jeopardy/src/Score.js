import React, {Component} from 'react';

class Score extends Component {
  render () {
    return (
      <div>
        <div>
          <div>Score: {this.props.score}</div>
        </div>
        <div>
          <button>Decrease</button>
          <button>Increase</button>
          <button>Reset</button>
        </div>
      </div>
    )
  }
}

export default Score;
