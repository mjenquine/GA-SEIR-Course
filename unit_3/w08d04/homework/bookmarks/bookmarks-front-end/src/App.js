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
      <div>
        <h1>Bookmarks</h1>
        <NewForm
        handleAddBookmark={this.handleAddBookmark}
        baseURL={baseURL}
        />
        <table>
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
      </div>
    )
  }
}













export default App;
