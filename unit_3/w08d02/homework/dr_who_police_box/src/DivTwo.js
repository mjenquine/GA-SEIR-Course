import React, {Component} from 'react';
import DivThree from './DivThree.js'

class DivTwo extends Component {
  render() {
    return (
      <div>
        <DivThree tardis = {this.props.tardis}/>
        <DivThree tardis = {this.props.tardis}/>
      </div>
    )
  }
}
export default DivTwo
