import React, { Component } from 'react';

export default class UpdateForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      url: 'http://'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount(){
    if (this.props.bookmark) {
      this.setState({
        title: this.props.bookmark.title,
        url: this.props.bookmark.url,
        _id: this.props.bookmark._id
      })
    }
  }

  render() {
    return(
      <div>
        <h1>Update Form</h1>
        <form onSubmit={(e)=> {this.props.handleUpdateBookmark(e, this.state); this.props.toggleForm()}}>
          <input type="text"
          placeholder="Enter Title"
          name="title"
          onChange={this.handleChange}
          value={this.state.title}/>

          <input type="text"
          placeholder="Enter URL"
          pattern="http[s]*://.+"
          name="url"
          onChange={this.handleChange}
          value={this.state.url}/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
};
