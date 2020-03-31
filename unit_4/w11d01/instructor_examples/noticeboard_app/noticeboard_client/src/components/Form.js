import React from 'react'
import Input from './Input.js'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title:'',
      author:'',
      phone:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    if(this.props.notice) {
      this.setState({
        title: this.props.notice.title,
        author: this.props.notice.author,
        phone: this.props.notice.phone,
        id: this.props.notice.id
      })
    }
  }
  handleChange (event) {
    this.setState({[event.target.id] : event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit(event, this.state)
    this.props.toggleForm && this.props.toggleForm()
    this.setState({
      title: '',
      author: '',
      phone: ''
    })
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={'title'}
          placeholder={'Notice Title'}
          type={'text'}
          value={this.state.title}
          id={'title'}
         />
         <Input
           handleChange={this.handleChange}
           name={'author'}
           placeholder={'Notice Author'}
           type={'text'}
           value={this.state.author}
           id={'author'}
        />
        <Input
          handleChange={this.handleChange}
          name={'phone'}
          placeholder={'Notice Phone'}
          type={'text'}
          value={this.state.phone}
          id={'phone'}
       />
       <input
        type='submit'
        value={this.props.notice ? "update this notice" : "add a notice"}
        />
      {this.props.children}
      </form>
    )
  }
}

export default Form
