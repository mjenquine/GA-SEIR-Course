import React from 'react'


export default class AppHeader  extends React.Component{
  render() {
    return (
      <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg"  color-on-scroll="100">
        <div className="container">
          <div className="navbar-translate">
          <a className="navbar-brand" href="https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Waverider/tree/master/unit_3/w08d03">
            WAVERIDER Class Lab its Lit </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="material-icons">apps</i> Be Creative
                  </a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
