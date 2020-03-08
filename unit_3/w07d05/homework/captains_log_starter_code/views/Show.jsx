const React = require('react')
const Default = require('./layouts/Default')

class Show extends React.Component {
  render(){
    return (
      <Default>
      <div class="jumbotron">
        <h1 class="display-4">{this.props.log.title}</h1>
        <p class="lead">{this.props.log.entry}</p>
        <hr class="my-4"/>
        <p>{this.props.log.shipIsBroken ? <a href="https://imgur.com/wh4uVNR"><img src="https://i.imgur.com/wh4uVNRs.png" title="source: imgur.com" /></a> : <a href="https://imgur.com/DMKS0gl"><img src="https://i.imgur.com/DMKS0gls.jpg" title="source: imgur.com" /></a>}</p>
        <a class="btn btn-primary btn-lg" href="/logs" role="button">Back</a>
      </div>
      </Default>
    )
  }
}
module.exports = Show
