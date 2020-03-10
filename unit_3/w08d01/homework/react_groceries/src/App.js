import React, {Component} from 'react';
import groceries from './data.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groceries: groceries
    }
  }
  render () {
    return (
      <div>
        <h1> Grocery List </h1>
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
