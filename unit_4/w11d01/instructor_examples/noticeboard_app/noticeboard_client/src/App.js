import React from 'react'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notices: []
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  componentDidMount() {
    this.getNotices()
  }
  getNotices() {
    fetch('/notices')
      .then(response => response.json())
      .then(json => {
        this.setState({
          notices: json
        })
      })
      .catch(error => console.error(error))
  }
  handleAdd(event, formInputs) {
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
      this.setState({
        notices: [jsonedNotice, ...this.state.notices]
      })
    }).catch(error => console.error(error))
  }
  handleDelete(deletedNotice) {
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
          notices,
        }
      })
  })
}
  handleUpdate(event, formInputs) {
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
    .catch(error => console.error(error))
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside handleSubmit={this.handleAdd}/>
          <Main
            notices={this.state.notices}
            handleDelete={this.handleDelete}
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
