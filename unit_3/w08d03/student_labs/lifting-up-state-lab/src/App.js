import React from "react";
import AppHeader from "./components/Header.js";
import AppMain from "./components/Main.js";
import CardContainer from "./components/CardContainer.js";
import data from "./Data.js"

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      data
    }
  }
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppMain h1="All of these can be dynamic h1" h2="This is the h2" h3="this is the h3">
            <CardContainer data={this.state.data}/>
        </AppMain>
      </div>
    );
  }
}

export default App;
