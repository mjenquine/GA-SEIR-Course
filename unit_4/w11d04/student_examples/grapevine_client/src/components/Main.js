// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components
import Post from './Post.js'
import Form from './Form.js'

// =============================
// COMPONENT CLASS
// =============================
class Main extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <main>
        <Post/>
      </main>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Main
