import React, { Component } from 'react';

class AllTheThings extends Component {

  render() {
    return (
        <li onClick={() => {this.props.handleAdd(this.props.product)}}>{this.props.product.name} {this.props.product.price}</li>
    );
  }
}

export default AllTheThings;
