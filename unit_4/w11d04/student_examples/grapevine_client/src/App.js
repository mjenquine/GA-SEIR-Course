// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
import Header from './components/Header.js'
import Aside from './components/Aside.js'
import Main from './components/Main.js'

// =============================
// COMPONENT CLASS
// =============================
class App extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div className="large-container">
        <Header/>
        <div className="main-container">
          <Aside />
          <Main />
        </div>
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default App
