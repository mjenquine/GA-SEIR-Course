import React from 'react'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Nav from './components/Nav.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notices: []
    }
    this.handleAdd= this.handleAdd.bind(this)
    this.handleDelete= this.handleDelete.bind(this)
    this.handleUpdate= this.handleUpdate.bind(this)
  }
  componentDidMount() {
    this.getNotices()
  }
  getNotices(){
    fetch('/notices')
      .then(response => response.json())
      .then(json => {
        this.setState({
          notices: json
        })
      })
      .catch(error => console.error(error))
  }

  handleAdd (event, formInputs) {
    event.preventDefault()
    fetch('/notices', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdNotice => {
      return createdNotice.json()
    })
    .then(jsonedNotice => {
     // add notice to notices
      this.setState({
        notices: [jsonedNotice, ...this.state.notices]
      })
    })
    .catch(error => console.log(error))
  }

  handleDelete (deletedNotice) {
    fetch(`/notices/${deletedNotice.id}`, {
       method: 'DELETE',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       }
     })
    .then(() => {
      this.setState(state => {
        const notices = state.notices.filter(notice => notice.id !== deletedNotice.id)
        return {
          notices
        }
      })
    })
    .catch(error => console.log(error))
  }

  handleUpdate (event, formInputs) {
    event.preventDefault()
    fetch(`/notices/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
       }
     })
     .then(updatedNotice => {
       this.getNotices()
     })
     .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside handleSubmit={this.handleAdd}/>
          <Main
            notices={this.state.notices} handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
