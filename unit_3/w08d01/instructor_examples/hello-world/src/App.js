import React from 'react'

const someData = 'Waveriders!'

class HelloWorld extends React.Component {
  clickIt() {
    alert('you clicked it')
  }
  render() {
    return <div onClick={this.clickIt}>Hello {someData}</div>
  }
}

export default HelloWorld
