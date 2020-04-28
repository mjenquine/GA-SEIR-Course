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
  state = {
    view: {
      page: 'home',
      pageTitle: 'i heard that...'
    },
    formInputs: {
      name: null,
      image: null,
      body: null,
      id: null
    }
  }
  handleView = (view, post) => {
  // declare an empty variable
  let pageTitle = ''
  let formInputs = {
      name: '',
      image: '',
      body: '',
      id: null
    }
  // decide the pageTitle based on the view
  switch (view) {
    case 'home':
      pageTitle = 'i heard that...'
      break
    case 'addPost':
      pageTitle = 'what did you say?'
      break
    case 'editPost':
      pageTitle = 'what did you really say?'
      formInputs = {
         name: post.name,
         image: post.image,
         body: post.body,
         id: post.id
       }
      break
    default:
      break
  }
  // update the state
  this.setState({
    view: {
      page: view,
      pageTitle: pageTitle
    },
    formInputs: formInputs
  })
}
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div className="large-container">
        <Header />
        <div className="main-container">
          <Aside handleView={this.handleView}/>
          <Main
            view={this.state.view}
            handleView={this.handleView}
            formInputs={this.state.formInputs}
          />
        </div>
      </div>
    )
  }
}

// =============================
// EXPORT
// =============================
export default App
