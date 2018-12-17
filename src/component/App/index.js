import React, { Component } from 'react';

import Header from '../Header'
import Weather from '../../containers/WeatherContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Weather/>
      </div>
    );
  }
}

export default App;
