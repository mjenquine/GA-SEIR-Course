const React = require('react');
const { Component } = React ;// using destructuring
const Mission = require ('./layouts/Mission')
const Extra = require('./layouts/Extra')

class Adventurer extends Component {

  render() {
    const name = this.props.name.split('_').join(' ')
    const title = this.props.title.split('_').join(' ')
    const mission = this.props.mission.split('_').join(' ')
    const tools = this.props.tools.split('_').join(' ').split(',')

    return (
      <Mission title={title} mission={mission}>
        {/*  const newMission = new Mission(title, mission, {children})*/}
        <h1>Hello My Name is { name } </h1>
          <ul>
          <h2> These are my magical items </h2>
            {
              tools.map((tool, key)=> {
                return <Extra key={key} data={tool}/>
              })
            }
        </ul>
        { this.props.tools[0] === 'thing'? 'not hi' : 'hi' }
      </Mission>
    );
  }

}
module.exports = Adventurer;
