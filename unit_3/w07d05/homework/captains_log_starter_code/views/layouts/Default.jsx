const React = require('react')

class Default extends React.Component {
  render(){
    return (
      <html>
        <head>
          <script src="https://kit.fontawesome.com/f7fdf9e41c.js" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
          <title> Captain's Logs </title>
        </head>
        <body>
          <div class="container">
            <br></br>
            <h1>Captain's Logs</h1>
            <br></br>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="/logs">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/logs/new"><i class="far fa-plus-square"></i>New Log</a>
              </li>
            </ul>
            <br></br>
            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}
module.exports = Default
