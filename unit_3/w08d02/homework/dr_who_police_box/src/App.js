import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tardis: {
                name: 'Time and Relative Dimension in Space',
                caps: false,
              }
    }
  }

  render () {
    return (
      <div>
        <h3>{this.state.tardis.name}</h3>
      </div>
    )
  }
}

export default App;
