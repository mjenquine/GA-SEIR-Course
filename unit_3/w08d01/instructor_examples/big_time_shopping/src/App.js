import React, { Component } from 'react'
import products from './data.js'

// console.table(products)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: products,
      name: '',
      price: 0,
      description: '',
      isHiring: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleHiring = this.toggleHiring.bind(this)
  }
  handleChange(event) {
    // BIG NO NO
    // this.state.value = event.target.value
    // console.log('this is', this)
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    }
    this.setState(
      {
        products: [newItem, ...this.state.products],
        name: '',
        price: 0,
        description: ''
      },
      () => {
        console.log(this.state.products)
      }
    )
  }
  toggleHiring () {
    this.setState({isHiring: !this.state.isHiring})
  }
  // the render function is JSX
  render() {
    return (
      <div>
        <h1 onClick={this.toggleHiring}> Big Time Shopping </h1>
        {
          this.state.isHiring
          ? <h2> Yes, we are hiring </h2>
          : <h2> Sorry, try again tomorrow </h2>
        }
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
          />
          <br />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
            id="price"
          />
          <br />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"
          />
          <input type="submit" />
        </form>
        <div>
          <h2>Preview our new item</h2>
          <h3>Name: {this.state.name}</h3>
          <h4>Price: {this.state.price}</h4>
          <h5>Description: {this.state.description}</h5>
        </div>
        <ul>
          {this.state.products.map((product, index) => {
            return (
              <li key={index}>
                {product.name} {product.price}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
