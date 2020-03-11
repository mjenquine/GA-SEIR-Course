import React from 'react'

class Song extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      love: false
    }
    this.toggleLove = this.toggleLove.bind(this)
  }
  toggleLove() {
    this.setState({
      love: !this.state.love
    })
  }
  render () {
    return  (
      <tr onClick={this.toggleLove}>
        <td>{this.props.song.title}</td>
        <td>{this.props.song.artist}</td>
        <td>{this.props.song.time}</td>
        {
          this.state.love
          ? <td> &hearts; </td>
          : <td> &nbsp;   &nbsp; </td>
        }
      </tr>
    )
  }
}

export default Song
