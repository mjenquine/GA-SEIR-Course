import React, {Component} from 'react';
import Daters from './components/Hello'
import './App.css';
import './index.css'

class App extends Component {


  render() {
    return (
      <>
        <header>DATING APP</header>
        <div className="daters-main">
          <aside className="daters">
            <Daters />
          </aside>
            <main></main>
          <aside className="daters">  
            <Daters />
          </aside>
        </div>
        <footer></footer>
      </>
    )
  }


}

export default App;
