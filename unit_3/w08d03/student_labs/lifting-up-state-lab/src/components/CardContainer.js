import React, {Component} from 'react'
import CardList from './CardList.js'

class CardContainer extends Component {
  render () {
    return (
      <CardList data={this.props.data}/>
    )
  }
}

export default CardContainer
