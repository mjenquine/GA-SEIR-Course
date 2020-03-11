import React, {Component} from 'react';
import DivTwo from './DivTwo.js'

class DivOne extends Component {
  render() {
    return (
      <div>
        <DivTwo tardis = {this.props.tardis}/>
      </div>
    )
  }
}
export default DivOne
