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
  state = {
    posts: []
  }

  fetchPosts = async () => {
    let response = await fetch('http://localhost:3000/posts')
    let data = await response.json()
    console.log(data)
    this.setState({ posts: data})
  }

  handleCreate = async createData => {
    let response = await fetch('http://localhost:3000/posts',
    {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    this.props.handleView('home')
    this.setState(prevState => {
      return({ posts: [...prevState.posts, data]})
    })
  }

  handleUpdate = async updateData => {
    let response = await fetch(`http://localhost:3000/posts/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    let data = await response.json()
    this.props.handleView('home')
    this.fetchPosts()
  }

  handleDelete = async id => {
    let response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    this.setState(prevState => {
      const posts = prevState.posts.filter(post => post.id !== id)
      return { posts }
    })
  }

  componentDidMount() {
    this.fetchPosts()
  }



  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <main>
        <h1>{this.props.view.pageTitle}</h1>
        { this.props.view.page === 'home'
          ? this.state.posts.map(post => (
              <Post
                key={post.id}
                post={post}
                handleView={this.props.handleView}
                handleDelete={this.handleDelete}
              />
            ))
          : <Form
              handleCreate={this.handleCreate}
              handleUpdate={this.handleUpdate}
              formInputs={this.props.formInputs}
              view={this.props.view}
            />
        }
      </main>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Main
