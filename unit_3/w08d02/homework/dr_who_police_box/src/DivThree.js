import React, {Component} from 'react';

class DivThree extends Component {
  constructor(props){
    super(props)
    this.changeIt = this.changeIt.bind(this)
  }
  changeIt (text) {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }
  render() {
    return (
        <div>
          <h3 onClick={()=> this.changeIt(this.props.tardis.name)}>{this.props.tardis.name}</h3>
        </div>
    )
  }
}
export default DivThree


// <div onClick={()=> this.changeIt(this.state.tardis.name)}>
//   <h3>{this.state.tardis.name}</h3>
// </div>
