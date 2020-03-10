import React, {Component} from 'react';
import birds from './data.js'
console.table(birds)


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      birds : birds,
      birdName: '',
      image: '',
      user: '',
      approved: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({ [event.target.id] : event.target.value })
  }
  handleSubmit (event) {
    event.preventDefault()
    const newBird = {
      birdName : this.state.birdName,
      image : this.state.image,
      user : this.state.user
    }
    const updatedBirds = [...this.state.birds, newBird]
    this.setState (
      {
        birds: updatedBirds,
        birdName: '',
        image: '',
        user: '',
        approved: false
      }
    )
  }
  render () {
    return(
      <div>
        <h1>Audubon Society Annual Bird Photo Contest</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="birdName">
            Bird Name:
            <input type="text" id="birdName"
            value={this.state.birdName}
            onChange={this.handleChange}/>
          </label>
          <br></br>
          <label htmlFor="image">
            Image:
            <input type="text" id="image"
            value={this.state.image}
            onChange={this.handleChange}/>
          </label>
          <br></br>
          <label htmlFor="user">
            Submitted By:
            <input type="text" id="user"
            value={this.state.user}
            onChange={this.handleChange}/>
          </label>
          <br></br>
          <input type="submit" />
          <br></br>
        </form>
        <div>
          {this.state.birds.map((bird, index) => {
            return (
              <div onClick={this.toggleBird} key={index}>
                <h1>Bird Name: {bird.birdName}</h1>
                <div><img src={bird.image} height="200" width="200"/></div>
                <div>Submitted By: {bird.user}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
