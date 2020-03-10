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
    this.changeIt = this.changeIt.bind(this)
  }
  changeIt (text) {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }

  render () {
    return (
      <div>
        <div onClick={()=> this.changeIt(this.state.tardis.name)}>
          <h3>{this.state.tardis.name}</h3>
        </div>
      </div>
    )
  }
}

export default App;
