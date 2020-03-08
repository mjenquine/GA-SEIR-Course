const React = require('react')
const Default = require('./layouts/Default')

class New extends React.Component {
  render(){
    return (
      <Default>
        <div>
          <h3>New Log</h3>
          <form action="/logs" method="post">
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title"  name="title"/>
            </div>
            <div class="form-group">
              <label for="entry">Entry</label>
              <input type="text" class="form-control" id="entry" name="entry"/>
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="isShipBroken" name="shipIsBroken"/>
              <label class="form-check-label" for="isShipBroken">Is the ship broken?</label>
            </div>
            <input type="submit" class="btn btn-primary"/>
          </form>
        </div>

      </Default>
    )
  }
}
module.exports = New
