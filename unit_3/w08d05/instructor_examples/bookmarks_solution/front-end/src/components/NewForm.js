import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      url: 'http://'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={(e)=> this.props.handleAddBookmark(e,this.state)}>

          <input type="text"
          placeholder="Enter Title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}/>

          <input type="text"
          placeholder="Enter URL"
          pattern="http[s]*://.+"
          name="url"
          value={this.state.url}
          onChange={this.handleChange}/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default App
