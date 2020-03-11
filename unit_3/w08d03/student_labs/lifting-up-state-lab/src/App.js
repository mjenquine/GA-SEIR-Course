import React from "react";
import AppHeader from "./components/Header.js";
import AppMain from "./components/Main.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppMain h1="All of these can be dynamic h1" h2="This is the h2" h3="this is the h3">
            <div>This can be your components that you build</div>
        </AppMain>
      </div>
    );
  }
}

export default App;
