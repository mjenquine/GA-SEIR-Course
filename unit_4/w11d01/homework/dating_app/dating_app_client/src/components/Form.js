import React, { Component } from 'react'

class Form extends React.Component {

  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          onChange={this.props.handleChange}
          name={'name'}
          placeholder={'Name'}
          type={'text'}
          id={'name'}
         />
         <input
           onChange={this.props.handleChange}
           name={'age'}
           placeholder={'Age'}
           type={'text'}
           id={'age'}
        />
        <input
          onChange={this.props.handleChange}
          name={'gender'}
          placeholder={'Gender'}
          type={'text'}
          id={'gender'}
       />
        <input
          onChange={this.props.handleChange}
          name={'img'}
          placeholder={'img'}
          type={'text'}
          id={'img'}
       />
       <input
        type='submit'
        value='Submit'/>
      </form>
    )
  }
}

export default Form
