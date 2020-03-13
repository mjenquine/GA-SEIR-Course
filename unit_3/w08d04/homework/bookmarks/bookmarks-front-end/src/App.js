import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import NewForm from './NewForm.js'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku bakend url here'
}
console.log('current base URL:', baseURL)

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        bookmarks: []
      }
    this.getBookmarks = this.getBookmarks.bind(this)
    this.handleAddBookmark = this.handleAddBookmark.bind(this)
  }
  componentDidMount(){
    this.getBookmarks()
  }
  async getBookmarks (){
    try {
    // the async request code you want to try
    let response = await fetch(`${baseURL}/bookmarks`)
    let data = await response.json()
    this.setState({bookmarks: data})
    } catch (e) {
    // what happens when you catch an error
    console.error(e)
    }
  }
  handleAddBookmark(bookmark) {
    const copyBookmarks = [bookmark, ...this.state.bookmarks]
    this.setState({
      bookmarks: copyBookmarks,
      title: '',
      url: ''
    })
  }
  render () {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Developer Bookmarks</h1>
        </div>
        <NewForm
        handleAddBookmark={this.handleAddBookmark}
        baseURL={baseURL}
        />
        <br></br>
        <table className="table table-striped table-hover">
          <tbody>
            {this.state.bookmarks.map(bookmark => {
              return (
                <tr key={bookmark._id} >
                  <td><a href={bookmark.url}>{bookmark.title}</a></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <footer className="footer mt-auto py-3">
          <div className="container">
            <span className="text-muted">Created by Mark Jenquine</span>
          </div>
        </footer>
      </div>
    )
  }
}













export default App;
