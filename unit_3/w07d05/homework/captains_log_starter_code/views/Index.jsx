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
                    <a href="/logs/{log[i].id}" class="card-link"><i class="far fa-eye"></i></a>
                    <a href="/logs/{log[i].id}/edit" class="card-link"><i class="far fa-edit"></i></a>
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
