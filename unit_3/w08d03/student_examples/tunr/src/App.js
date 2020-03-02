import React, { Component } from 'react';
import Header from './components/Header';
import Playlist from './components/Playlist';
import playlists from './data';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playlists: playlists,
      title: '',
      artist: 0,
      time: '0:00'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
  event.preventDefault()
  const newSong = {
    title: this.state.title,
    artist: this.state.artist,
    time: this.state.time
  }

  const updatedSongs = [ ...this.state.playlists.songs, newSong ]

  this.setState({
    playlists: {
      songs: updatedSongs
    },
    name: '',
    artist: '',
    time: '0:00'
  })
}

  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }


  render () {

    return (
      <div className="App">
        <Header message={"Welcome to SEI"}/>
        <div>
          <h2>Preview our new song</h2>
          <h3>{this.state.title}</h3>
          <h4>{this.state.artist}</h4>
          <h5>{this.state.time}</h5>
        </div>
        <form  onSubmit={this.handleSubmit}>
          <label htmlFor='artist'>artist</label>
          <input type='text' value={this.state.artist} id='artist' onChange={this.handleChange}/>
          <label htmlFor='title'>title</label>
          <input type='text' value={this.state.title} id='title' onChange={this.handleChange}/>
          <label htmlFor='time'>time</label>
          <input type='text' value={this.state.time} id='time' onChange={this.handleChange}/>
          <input type='submit' />
        </form>
        <Playlist playlists={this.state.playlists}/>
      </div>
    );
  }
}

export default App;
