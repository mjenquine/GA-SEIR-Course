import React from 'react'


class NewForm extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
    name: ''
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
      let response =   await fetch(this.props.baseURL + '/holidays', {
          method: 'POST',
          body: JSON.stringify({name: this.state.name}),
          headers: {
              'Content-Type': 'application/json'
            }
          })
          let data =  await response.json()
          this.props.handleAddHoliday(data)
          this.setState({
            name: ''
          })
        }catch(e){
          console.error({'Error': e})
        }
      }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="add a holiday"/>
        <input type="submit" value="Add a Reason to Celebrate"/>
      </form>
    )
  }
}

export default NewForm
