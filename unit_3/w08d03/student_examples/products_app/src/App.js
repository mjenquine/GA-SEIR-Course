import React, { Component } from 'react';
import products from './data.js'
import AllTheThings from './components/AllTheThings.js'
import MyShoppingCart from './components/MyShoppingCart.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: products
    }
  }
  render() {
    return (
      <div className="App">

        <h1>Big Time Shopping</h1>

        <div className="AllTheThings">
        <h2>Put these in your cart!</h2>
        {this.state.products.map((product, index) => {
          return (
            <AllTheThings product={product} key={index}/>
          )
        })}
        </div>
        <MyShoppingCart />
      </div>
    );
  }
}

export default App;
