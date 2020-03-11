import React, {Component} from 'react';
import DivOne from './DivOne.js'

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
        <DivOne tardis={this.state.tardis}/>
      </div>
    )
  }
}




export default App;
