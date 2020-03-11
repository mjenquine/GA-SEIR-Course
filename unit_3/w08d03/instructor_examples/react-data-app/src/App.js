import React, { Component } from 'react';
import MovieInfo from './MovieInfo'


class App extends Component {
  constructor (props) {
  super(props)
  this.state = {
    baseURL: 'http://www.omdbapi.com/?',
    apikey: 'apikey=8d432cb5',
    query: '&t=',
    movieTitle: '',
    searchURL: '',
    movie: {}
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}
handleChange (event) {
  this.setState({ [event.target.id]: event.target.value})
}
handleSubmit (event) {
  event.preventDefault()
   this.setState({
     searchURL: this.state.baseURL + this.state.apikey + this.state.query +  this.state.movieTitle
   },
    () => {
      fetch(this.state.searchURL)
      .then( response =>{
        return response.json()
      })
      .then(
        (response) => {
          this.setState({movie: response})
        }
      )
      .catch(
        (err) => {
          console.error(err)
        }
      )
    }
 )
}
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='movieTitle'>Title</label>
        <input
          id='movieTitle'
          type='text'
          value={this.state.movieTitle}
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Find Movie Info'
        />
      </form>
      <a href={this.state.searchURL}>{this.state.searchURL}</a>
      <MovieInfo movie = {this.state.movie} />
      </div>
    );
  }
}

export default App;
