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
          <div>Category:</div>
        </div>
        <div>
          <div>Points:</div>
        </div>
        <div>
          <div>Answer:</div>
        </div>
        <div>
          <button>Click to Reveal Question</button>
        </div>
      </div>
    )
  }
}

export default Game;
