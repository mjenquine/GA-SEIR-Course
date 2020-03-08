const React = require('react')
const Default = require('./layouts/Default')

class Edit extends React.Component {
  render(){
    return (
      <Default>
      <div>
        <h3>Edit Log</h3>
        <form action={`/logs/${this.props.log.id}?_method=PUT`} method="post">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title"  name="title" value={this.props.log.title}/>
          </div>
          <div class="form-group">
            <label for="entry">Entry</label>
            <input type="text" class="form-control" id="entry" name="entry" value={this.props.log.entry}/>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="isShipBroken" name="shipIsBroken"/>
            <label class="form-check-label" for="isShipBroken">Is the ship broken?</label>
          </div>
          <input type="submit" class="btn btn-primary"/>
        </form>
        <br></br>
        <form action={`/logs/${this.props.log.id}?_method=DELETE`} method="post">
          <input class="btn btn-outline-danger" type="submit" value="Delete Log"/>
        </form>

      </div>


      </Default>
    )
  }
}
module.exports = Edit
