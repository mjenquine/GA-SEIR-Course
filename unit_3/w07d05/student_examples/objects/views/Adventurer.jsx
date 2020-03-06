const React = require('react')
const { Component } = React //using destructuring
const Mission = require('./layouts/Mission')

// class Adventurer extends Component {
//   render(){
//     const students = ["Cristi", "Ric", "Evan", "Scott", "William", "Alfanso", "Ben"]
//     return (
//       <Mission title={this.props.title} mission={this.props.mission}>
//       <h1>Hello My Name Is { this.props.name }</h1>
//       <ul>
//       <h2>These are my amazing students</h2>
//       {
//         students.map((student, key) => {
//         return <li key = {key}>{student}</li>
//         })
//       }
//       </ul>
//       </Mission>
//     );
//   }
// }
class Adventurer extends React.Component {
 render() {
   return (
     <Mission title={this.props.title} mission={this.props.mission}>
       <div>Hello {this.props.name}</div>
       <ul>
        <h2> The magical tools of {this.props.name}</h2>
         { this.props.tools.map((tool, index)=> {
           return (<li key={index}>{tool}</li>)
         })}
       </ul>
     </Mission>
   );
 }
}

module.exports = Adventurer;
