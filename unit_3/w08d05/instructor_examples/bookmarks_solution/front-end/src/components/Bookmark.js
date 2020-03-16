import React, { Component } from 'react';
import UpdateForm from './UpdateForm'

export default class Bookmark extends Component {
  constructor(props){
    super(props)
    this.state = {
      _id: this.props.bookmark._id,
      showForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm(){
    this.setState({showForm: !this.state.showForm})
  }

  render() {
    return (
      <div>
        {this.state.showForm ? <UpdateForm handleUpdateBookmark={this.props.handleUpdateBookmark} bookmark={this.props.bookmark} toggleForm={this.toggleForm}/> : <h1><a href={this.props.bookmark.url}>{this.props.bookmark.title}</a></h1>}
        <h4 onClick={this.toggleForm}>Update Me!</h4>
        <button onClick={()=>this.props.deleteBookmark(this.state)}>X</button>
      </div>
    );
  }
};
