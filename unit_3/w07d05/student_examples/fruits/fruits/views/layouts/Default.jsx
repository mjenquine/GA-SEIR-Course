const React = require('react')

class Default extends React.Component{
  render() {
    return (
    <html>
      <head>
        <link rel="stylesheet" href="/css/main.css" />
        <title> {this.props.title} </title>
      </head>
      <body>
        <h1>{this.props.page}</h1>
        {this.props.children}
      </body>
    </html>
    )
  }
}
module.exports= Default ;
