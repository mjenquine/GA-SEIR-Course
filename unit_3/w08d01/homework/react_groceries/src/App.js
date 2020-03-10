import React, {Component} from 'react';
import groceries from './data.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groceries: groceries
    }
  }
  render () {
    return <div>Hi</div>
  }
}



export default App;
