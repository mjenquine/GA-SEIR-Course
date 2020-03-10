import React, {Component} from 'react';
import groceries from './data.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groceries: groceries,
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased
    }
    console.log(newItem);
    this.setState({
      groceries: [newItem, ...this.state.groceries],
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false
    })
  }
  render () {
    return (
      <div>
        <h1> Grocery List </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">Item </label>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
            id="item"
          />
          <br></br>
          <label htmlFor="brand">Brand </label>
          <input
            type="text"
            value={this.state.brand}
            onChange={this.handleChange}
            id="brand"
          />
          <br></br>
          <label htmlFor="units">Purchase Unit </label>
          <input
            type="text"
            value={this.state.units}
            onChange={this.handleChange}
            id="units"
          />
          <br></br>
          <label htmlFor="quantity">Purchase Qty </label>
          <input
            type="text"
            value={this.state.quantity}
            onChange={this.handleChange}
            id="quantity"
          />
          <br></br>
          <label htmlFor="isPurchased">Purchased </label>
          <input
            type="text"
            value={this.state.isPurchased}
            onChange={this.handleChange}
            id="isPurchased"
          />
          <br></br>
          <input type="submit" />
        </form>

        {this.state.groceries.map(grocery => grocery.isPurchased
          ? " "
          : <div>
              <h3>Item: {grocery.item}</h3>
              <div>Brand: {grocery.brand}</div>
              <div>Purchase Units: {grocery.units}</div>
              <div>Purchase Qty: {grocery.quantity}</div>
              <br/>
            </div>
        )}
      </div>
    )
  }
}



export default App;
