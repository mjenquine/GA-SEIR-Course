import React, {Component} from 'react';
import LineChart from './components/LineChart.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      iceCreams: []
    }
    this.getIceCreams = this.getIceCreams.bind(this)
  }

  async getIceCreams(){
    try{
      const response = await fetch('/ice_creams')
      const iceCreams = await response.json()
      this.setState({ iceCreams:[...iceCreams] })
      console.log(this.state.iceCreams)
    } catch (err){
        console.error(err)
    }
  }

  componentDidMount(){
    this.getIceCreams()
  }

  render() {
    return(
      <div>
        <h1>Ice Cream Sales</h1>
        <LineChart id={1}/>
        <LineChart id={2}/>
      </div>
    )
  }
}

export default App;
