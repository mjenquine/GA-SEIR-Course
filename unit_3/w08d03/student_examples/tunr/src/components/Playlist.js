import React, { Component } from 'react';
import Song from './Song';

class Playlist extends Component {
  render() {
    return (
      <div className="playlists">
        <h3>{this.props.playlists.title}</h3>
        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.props.playlists.songs.map((song, index) => {
              return (
                <Song
                  song={song}
                  key={index}/>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Playlist;
