const React = require('react')


class  Extra extends React.Component{
  render() {
    return (
    <li> {this.props.data.toUpperCase()}</li>
    )
  }
}
module.exports= Extra ;
