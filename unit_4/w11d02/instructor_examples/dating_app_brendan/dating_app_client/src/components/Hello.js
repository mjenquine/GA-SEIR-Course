import React, { Component } from 'react'
import Form from './Form'

export default class Daters extends Component {
  constructor() {
    super()
    this.state = {
      daters1: [],
      daters2: []
    }
    this.handleAddDater = this.handleAddDater.bind(this)
  }

  async getDaters() {
    try {
      let response = await fetch('http://localhost:3000/users')
      let data = await response.json()
      let daters1 = [data[0], data[1], data[2]]
      let daters2 = [data[3], data[4], data[5]]
      this.setState({
        daters1: daters1,
        daters2: daters2
      })
    } catch (e) {
      console.log(e)
    }
  }

  async handleAddDater(e, dater) {
    console.log(dater)
    e.preventDefault()
    try {
      let response = await fetch('http://localhost:3000/users', {
        body: JSON.stringify(dater),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      alert('Dater added!')
    } catch (e) {
      console.log(e)
    }
  }

  defaultImage(e) {
    e.target.src =
      'https://cirfa.uit.no/wp-content/uploads/2016/05/avatar150.png'
  }

  // async handleAddDater(e, dater) {
  //   e.preventDefault()
  //   try {
  //     let response = await fetch('http://localhost:3000/users', {
  //       body: JSON.stringify(dater),
  //       method: POST,
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     alert('Dater added!')
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  componentDidMount() {
    this.getDaters()
  }

  render() {
    return (
      <>
        <nav>
          {this.state.daters1.map(dater => (
            <div>
              <h3>Name: {dater.name}</h3>
              <img src={dater.img} onError={this.defaultImage} />
              <h4>Age: {dater.age}</h4>
            </div>
          ))}
        </nav>
        <aside>
          {this.state.daters2.map(dater => (
            <div>
              <h3>Name: {dater.name}</h3>
              <img src={dater.img} onError={this.defaultImage} />
              <h4>Age: {dater.age}</h4>
            </div>
          ))}
        </aside>
        <main>
          <h1>Welcome Daters!</h1>
          <Form handleAddDater={this.handleAddDater} />
        </main>
      </>
    )
  }
}
