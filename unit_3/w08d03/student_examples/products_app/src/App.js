import React, { Component } from 'react';
import products from './data.js'// this data is the poduct we pass to state
import AllTheThings from './components/AllTheThings.js'
import MyShoppingCart from './components/MyShoppingCart.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products,
      cart: []
    }
    this.addToCart = this.addToCart.bind(this)
  }
  addToCart (item) {
    console.log(item)
    this.setState({cart: [item, ...this.state.cart]})
    console.log(this.state.cart);
  }

  render() {
    return (
      <div className="App">

        <h1>Big Time Shopping</h1>

        <div className="AllTheThings">
        <h2>Put these in your cart!</h2>
        {this.state.products.map((product, index) => {
          return (
            <AllTheThings
              product={product}
              key={index}
              handleAdd={this.addToCart}
              />
          )
        })}
        </div>
        <MyShoppingCart
          cart={this.state.cart}
          />
      </div>
    );
  }
}

export default App;
