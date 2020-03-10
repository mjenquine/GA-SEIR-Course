import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false,
      groceries: [
        {item: 'Apple', brand: 'apples', units: '50', quantity: 10, isPurchased: false},
        {item: 'Rice', brand: 'Uncle Bens', units: '10', quantity: 3, isPurchased: false},
        {item: 'Ice Cream', brand: 'Ben and Jerrys', units: '10', quantity: 1, isPurchased: false}
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity
    }
    this.setState({
      groceries: [newItem, ...this.state.groceries],
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false
    })
  }

  buyItem(item){
    item.isPurchased = !item.isPurchased
    this.setState({isPurchased: item.isPurchased})
  }

  render(){
    return(
      <div>
        <h1>React Groceries!</h1>
        <h3>Add a grocery to your list!</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="Enter Item"
            name="item"
            value={this.state.item}
            onChange={this.handleChange}/>
          <input type="text"
            placeholder="Enter Brand"
            name="brand"
            value={this.state.brand}
            onChange={this.handleChange}/>
          <input type="text"
            placeholder="Enter Units"
            name="units"
            value={this.state.units}
            onChange={this.handleChange}/>
          <input type="number"
            placeholder="Enter Quantity"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
        {this.state.groceries.map((item, i)=> (
          <div className="item" key={i}>
            {item.isPurchased ? "" : <h3>Item: {item.item}</h3>}
            {item.isPurchased ? "" : <h4>Brand: {item.brand}</h4>}
            {item.isPurchased ? "" : <h5>Units: {item.units}</h5>}
            {item.isPurchased ? "" : <h6>Quantity: {item.quantity}</h6>}
            {item.isPurchased ? "" : <button onClick={()=> this.buyItem(item)}>Buy Me!</button>}
          </div>
        ))}
      </div>
    )
  }
}

export default App
