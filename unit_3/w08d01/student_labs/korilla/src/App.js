import React, { Component } from 'react';
import receipts from './receipts.js'

console.table(receipts);

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
     receipts: receipts
    }
  }

  render () {
    return (
      <div>
        <h1> Korilla </h1>

          {this.state.receipts.map(receipt =>
          {receipt.paid ? <div hidden> : <div>}
            <h2>{receipt.person}</h2>
            <ul>
              <li>
              Main: {receipt.order.main}
              </li>
              <li>
              Protein: {receipt.order.protein}
              </li>
              <li>
              Rice: {receipt.order.rice}
              </li>
              <li>
              Sauce: {receipt.order.sauce}
              </li>
              <li>
              Drink: {receipt.order.drink}
              </li>
              <li>
              Cost: {receipt.order.cost}
              </li>
            </ul>
          </div>
          )}
      </div>
    )
  }
}

export default App;
