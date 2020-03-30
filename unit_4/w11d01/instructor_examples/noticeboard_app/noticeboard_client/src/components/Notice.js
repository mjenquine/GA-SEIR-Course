import React from 'react'
import Form from './Form.js'

class Notice extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      formVisible: false
    }
    this.toggleForm = this.toggleForm.bind(this)
  }
  toggleForm() {
    this.setState({formVisible: !this.state.formVisible})
  }
  render () {
    const {notice, handleDelete, handleUpdate} = this.props
      return (
        <>
         {this.state.formVisible
           ? <Form
              notice={notice}
              handleSubmit={handleUpdate}
              toggleForm={this.toggleForm}
              >
                <button onClick={this.toggleForm}>Nevermind</button>
              </Form>
           : <div className="notice">
              <h3>{ notice.title }</h3>
              <p>{ notice.author }</p>
              <small>{notice.phone }</small>
              <button onClick={()=> handleDelete(notice)}>X</button>
              <button onClick={this.toggleForm}>Edit This Entry</button>
              </div>
          }
        </>
      )
  }
}

export default Notice
