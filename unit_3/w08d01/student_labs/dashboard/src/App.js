import React from 'react';
import Navigation from './components/Navigation'
import Reviews from './components/Reviews'
import Ratings from './components/Ratings'
import Sentiment from './components/Sentiment'
import Visitors from './components/Visitors'

class App extends React.Component {
  render () {
    return (
      <div>
        <Navigation />
        <Reviews />
        <Ratings />
        <Sentiment />
        <Visitors />
      </div>
    )
  }
}

export default App;
