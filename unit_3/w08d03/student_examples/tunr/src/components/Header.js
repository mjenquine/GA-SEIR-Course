import React, { Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>PlayList Header</h1>
        <h3>{this.props.message}</h3>
      </header>
    )
  }
}

export default Header;
