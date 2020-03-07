const React = require('react')

class Mission extends React.Component{
  render() {
    return (
      <html>
      <head><title>{this.props.title}</title></head>
        <body> Our Hero is Currently on Mission : {this.props.mission}
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Mission;
