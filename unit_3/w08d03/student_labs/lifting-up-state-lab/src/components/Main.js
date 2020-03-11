import React from "react";

export default class AppMain extends React.Component {
  render() {
    return (
      <div>
        <div
          className="page-header header-filter"
          data-parallax="true"
          style={{backgroundImage: `url('assets/img/bg3.jpg')`}}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <div className="brand text-center">
                  <h1>{this.props.h1}</h1>
                  <h3 className="title text-center">{this.props.h3}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main main-raised">
          <div className="container">
            <div className="section text-center">
              <h2 className="title">{this.props.h2}</h2>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
