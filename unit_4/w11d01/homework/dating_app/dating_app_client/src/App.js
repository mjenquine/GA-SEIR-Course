import React, {Component} from 'react';
import LeftDaters from './components/LeftDaters'
import RightDaters from './components/RightDaters'
import Form from './components/Form'
import './App.css';
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      daters: [],
      name: '',
      age: '',
      gender: '',
      img: ''
    }
    this.handleAdd= this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.getDaters()
  }
  handleChange (event) {
    console.log(event.target.value);
    this.setState({[event.target.id] : event.target.value})
  }

  getDaters () {
    fetch('http://localhost:3000/users'
  )
    .then(res => res.json())
    .then(jsonedDaters => this.setState({daters: jsonedDaters}))
    .catch( error => console.error(error))
  }

  handleAdd (event, formInputs) {
    event.preventDefault()
    fetch('/users', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdDater => {
      return createdDater.json()
    })
    .then(jsonedDater => {
     // add notice to notices
      this.setState({
        daters: [jsonedDater, ...this.state.daters]
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <header>DATING APP</header>
        <div className="daters-main">
          <aside className="daters">
            <LeftDaters daters={this.state.daters}/>
          </aside>
          <main></main>
          <aside className="daters">
            <RightDaters daters={this.state.daters}/>
          </aside>
        </div>
        <Form
          handleSubmit={this.handleAdd}
          handleChange={this.handleChange}
        />
      </>
    )
  }


}

export default App;
