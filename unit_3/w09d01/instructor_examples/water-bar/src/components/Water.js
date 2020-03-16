import React from 'react'

class Water extends React.Component {
  render () {
    return (
      <div key={this.props.water.id}>
        <dl>
          <dt>{this.props.water.brand}</dt>
          <dd>{this.props.water.price}</dd>
        </dl>

      </div>
    )
  }
}

export default Water
