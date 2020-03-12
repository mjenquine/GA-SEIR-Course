import React from 'react'
import './css/normalize.css'
import './css/skeleton.css'
import './css/index.css'
// import ballons from './images/two-balloon-icons-68911.png'
// import pencil from './images/simpleiconDOTcom-pen-15-64x64.png'
// import Show from './components/Show.js'
// import UpdateForm from './components/UpdateForm.js'
let baseURL = ''
//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku bakend url here'
}
console.log('current base URL:', baseURL)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      holidays: []
    }
    this.getHolidays = this.getHolidays.bind(this)
  }
  componentDidMount(){
    this.getHolidays()
  }
  async getHolidays (){
    try {
    // the async request code you want to try
    let response = await fetch(`${baseURL}/holidays`)
    let data = await response.json()
    this.setState({holidays: data})
    } catch (e) {
    // what happens when you catch an error
    console.error(e)
    }
  }
  render () {
   return (
     <div className='container'>
      <h1>Holidays! Celebrate!</h1>
      <table>
       <tbody>
         { this.state.holidays.map(holiday => {
             return (
               <tr key={holiday._id} >
                 <td> {holiday.name }</td>
               </tr>
             )
           })
         }
       </tbody>
      </table>
     </div>
   )
  }
}
export default App
