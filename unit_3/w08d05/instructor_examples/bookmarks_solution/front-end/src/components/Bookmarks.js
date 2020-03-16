import React from 'react';
import NewForm from './NewForm'
import Bookmark from './Bookmark'


let baseURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  //Would change to heroku backend
  baseURL = 'http://localhost:3003'
}

class Bookmarks extends React.Component{
  constructor(){
    super()
    this.state = {
      bookmarks: []
    }
    this.handleAddBookmark = this.handleAddBookmark.bind(this)
    this.handleUpdateBookmark = this.handleUpdateBookmark.bind(this)
    this.deleteBookmark = this.deleteBookmark.bind(this)
  }

  async handleAddBookmark(e, bookmark){
    e.preventDefault()
    try{
      let response = await fetch(`${baseURL}/bookmarks`, {
        body: JSON.stringify(bookmark),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      let data = await response.json()
      let copyBookmarks = [data, ...this.state.bookmarks]
      this.setState({
        bookmarks: copyBookmarks,
        title: '',
        url: ''
      })
    } catch(e){
      console.log(e);
    }
  }

  async fetchBookmarks(){
    try{
      let response = await fetch(`${baseURL}/bookmarks`)
      let data = await response.json()
      this.setState({bookmarks: data})
    } catch(e) {
      console.log(e);
    }
  }

  async handleUpdateBookmark(e, bookmark){
    e.preventDefault()
    try{
      let response = await fetch(`${baseURL}/bookmarks/${bookmark._id}`, {
        body: JSON.stringify(bookmark),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      let updatedBookmark = await response.json()
      const foundBookmarkIndex = this.state.bookmarks.findIndex(foundBookmark => foundBookmark._id === bookmark._id)
      const copyBookmarks = [...this.state.bookmarks]
      copyBookmarks[foundBookmarkIndex] = updatedBookmark
      this.setState({
        bookmarks: copyBookmarks
      })
    } catch(e){
      console.log(e);
    }
  }

  async deleteBookmark(bookmark){
    try{
      let response = await fetch(`${baseURL}/bookmarks/${bookmark._id}`, {
        method: 'DELETE'
      })
      let data = await response.json()
      const foundBookmark = this.state.bookmarks.findIndex(bookmark => bookmark._id === data._id)
      const copyBookmarks = [...this.state.bookmarks]
      copyBookmarks.splice(foundBookmark, 1)
      this.setState({bookmarks: copyBookmarks})
    } catch(e){
      console.log(e);
    }
  }

  componentDidMount(){
    this.fetchBookmarks()
  }

  render(){
    return(
      <div>
        <h1>Bookmarks</h1>
        <NewForm handleAddBookmark={this.handleAddBookmark}/>
        {this.state.bookmarks.map(bookmark => (
          <Bookmark bookmark={bookmark} key={bookmark._id} handleUpdateBookmark={this.handleUpdateBookmark} deleteBookmark={this.deleteBookmark}/>
        ))}
      </div>
    )
  }
}

export default Bookmarks
