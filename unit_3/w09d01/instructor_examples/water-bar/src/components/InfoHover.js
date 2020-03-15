import React from 'react'

class InfoHover extends React.Component {
  render () {
    return (
      <div className="info">
        <h2>{this.props.water.name}</h2>
        <h6>{this.props.water.type}</h6>
        <h6>Tapped from: {this.props.water.countryOfOrigin}</h6>
        <h6>Brought to you by: {this.props.water.brand}</h6>
        <p>{this.props.water.description}</p>
        <h6>Price: {this.props.water.price}</h6>
      </div>
    )
  }
}

export default InfoHover
