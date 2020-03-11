import React , {Component} from  'react'


export default class MovieInfo extends Component {
  render(){
    return (
      <div>
        <h1> Title: { this.props.movie.Title}</h1>
        <h3>Genre: { this.props.movie.Genre}</h3>
        <p>Synopsis: { this.props.movie.Plot}</p>
      </div>

    )
  }
}
