import React, {Component} from 'react'

class NewForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      url: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value})
  }
  async handleSubmit (event) {
      event.preventDefault()
      try{
      let response =   await fetch(this.props.baseURL + '/bookmarks', {
          method: 'POST',
          body: JSON.stringify({title: this.state.title, url: this.state.url}),
          headers: {
              'Content-Type': 'application/json'
          }
    })
    let data =  await response.json()
    this.props.handleAddBookmark(data)
        this.setState({
          title: '',
          url: ''
        })
   }catch(e){
      console.error({'Error': e})
   }
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" id="title" name="title" onChange={this.handleChange} value={this.state.title} placeholder="Website Name"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" id="url" name="url" onChange={this.handleChange} value={this.state.url} placeholder="http://"/>
          </div>
          <div className="col">
            <input className="btn btn-primary" type="submit" value="Add your development resource"/>
          </div>
        </div>
      </form>
    )
  }
}
export default NewForm
