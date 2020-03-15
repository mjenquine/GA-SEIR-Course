import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      initialPoints: 0,
      show: false
    }
    this.getQuestion = this.getQuestion.bind(this)
    this.increaseScore = this.increaseScore.bind(this)
    this.decreaseScore = this.decreaseScore.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  getQuestion(event){
    event.preventDefault()
    fetch('http://jservice.io/api/random')
    .then(response => response.json())
    .then(jData => {
      console.log(jData);
      this.setState({
        question: jData[0],
        points: jData[0].value,
        show: false
      })
    })
  }

  increaseScore(){
    this.setState({
      initialPoints: this.state.initialPoints + this.state.points
    })
  }

  decreaseScore(){
    this.setState({
      initialPoints: this.state.initialPoints - this.state.points
    })
  }

  changeView(){
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className=''>
        <h1>Jeopardy!</h1>
        <h2>Score:{this.state.initialPoints}</h2>
        <button onClick={this.increaseScore}>Increase Score!</button>
        <button onClick={this.decreaseScore}>Decrease Score!</button>
        <button onClick={this.getQuestion}>Get Question!</button>
        <h2>Value: {this.state.points}</h2>
        {this.state.question ? <h2>Category: {this.state.question.category.title}</h2> : ""}
        {this.state.question ? <h2>Question: {this.state.question.question}</h2> : ""}
        <button onClick={this.changeView}>Toggle Answer!</button>
        {this.state.show ? <h3>{this.state.question.answer}</h3> : ""}
      </div>
    )
  }
}

export default App
