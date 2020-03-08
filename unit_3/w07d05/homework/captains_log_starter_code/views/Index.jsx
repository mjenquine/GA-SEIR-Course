const React = require('react')
const Default = require('./layouts/Default')

class Index extends React.Component {
  render(){
    return (
      <Default>
        <div>
          {
            this.props.logs.map((log, i) => {
              return (
                <div class="card">
                  <div key={i} class="card-body">
                    <h5 class="card-title">{log.title}</h5>
                    <p class="card-text">{log.entry}</p>
                    <a href={`/logs/${log.id}`} class="card-link"><i class="far fa-eye" data-toggle="tooltip" data-placement="bottom" title="View Log"></i></a>
                    <a href={`/logs/${log.id}/edit`} class="card-link"><i class="far fa-edit"data-toggle="tooltip" data-placement="bottom" title="Edit Log"></i></a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </Default>
    )
  }
}
module.exports = Index
