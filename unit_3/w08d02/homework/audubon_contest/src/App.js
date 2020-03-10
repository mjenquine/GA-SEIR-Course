import React, {Component} from 'react';
import birds from './data.js'
console.table(birds)


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      birds : birds,
      birdName: '',
      image: '',
      user: '',
      approved: false
    }
  }












  render () {
    return(
      <h1>Hi</h1>
    )
  }
}

export default App;
