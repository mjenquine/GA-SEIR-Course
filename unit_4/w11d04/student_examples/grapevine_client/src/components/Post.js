// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Post extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
  return (
    <article>
      <div className="post-header">
        <img src={this.props.post.image} alt="img"/>
        <h1>{this.props.post.name} said...</h1>
      </div>
      <div className="post-body">
        {this.props.post.body}
      </div>
      <div className="post-options">
        <ul>
          <li onClick={() => {this.props.handleView('editPost', this.props.post)}}>edit post</li>
          <li onClick={() => {this.props.handleDelete(this.props.post.id)}}>delete post</li>
        </ul>
      </div>
    </article>
  )
}
}

// =============================
// EXPORT
// =============================
export default Post
