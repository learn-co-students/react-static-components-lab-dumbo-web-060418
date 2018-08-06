import React, { Component } from 'react';
import MouseComponent from './MouseComponent'
import CatComponent from './CatComponent'
import FordQuoteComponent from './FordQuoteComponent'


class App extends Component {
  render() {
    // your code in the return statement below!
    return (
      <div className="App">
        <CatComponent />
        <FordQuoteComponent />
        <MouseComponent />
      </div>
    );
  }
}

export default App;
