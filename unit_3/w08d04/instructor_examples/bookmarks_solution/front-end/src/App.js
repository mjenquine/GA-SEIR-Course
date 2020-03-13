import React from 'react'
// import ballons from './images/two-balloon-icons-68911.png'
// import pencil from './images/simpleiconDOTcom-pen-15-64x64.png'
// import Show from './components/Show.js'
// import UpdateForm from './components/UpdateForm.js'
let baseURL = process.env.REACT_APP_BASEURL
//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}
console.log('current base URL:', baseURL)
class App extends React.Component {
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
    }catch(e){
      // what happens when you get an error
      console.error(e)
    }
  }
  handleAddBookmark(bookmark) {
    const copyBookmarks = [bookmark, ...this.state.bookmarks]
    this.setState({
      bookmarks: copyBookmarks,
      name: ''
    })
}
 render () {
   return (
     <div className='container'>
      <h1>Bookmarks! Celebrate!</h1>
        <table>
    <tbody>
      { this.state.bookmarks.map(bookmark => {
          return (
            <tr key={bookmark._id} >
              <td> {bookmark.title }</td>
              <td> <a href={bookmark.url.split('https')}>Link</a></td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
     </div>
   )
 }
}
export default App
