import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: 0,
      img: '',
      show: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggleShow = this.toggleShow.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleShow() {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div className="">
        <h1 onClick={this.toggleShow}>Toggle Add New Dater</h1>
        {this.state.show ? (
          <form
            onSubmit={e => {
              this.props.handleAddDater(e, this.state)
              this.toggleShow()
            }}
          >
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={this.handleChange}
            />
            <input
              type="number"
              placeholder="age"
              name="age"
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="img"
              name="img"
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
        ) : (
          ''
        )}
      </div>
    )
  }
}
