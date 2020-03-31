import React, {Component} from 'react';
import LeftDaters from './components/LeftDaters'
import RightDaters from './components/RightDaters'
import './App.css';
import './index.css'

class App extends Component {
  state = {
    daters: []
  }
  componentDidMount() {
    this.getDaters()
  }
  getDaters () {
    fetch('http://localhost:3000/users'
  )
    .then(res => res.json())
    .then(jsonedDaters => this.setState({daters: jsonedDaters}))
    .catch( error => console.error(error))
  }

  render() {
    return (
      <>
        <header>DATING APP</header>
        <div className="daters-main">
          <aside className="daters">
            <LeftDaters daters={this.state.daters}/>
          </aside>
          <main></main>
          <aside className="daters">
            <RightDaters daters={this.state.daters}/>
          </aside>
        </div>
        <footer></footer>
      </>
    )
  }


}

export default App;
