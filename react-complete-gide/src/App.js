import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! I'm React</h1>
      </div>
    );
    // Delete the next code from the lesson 30. Understanding JSX when starting the next lesson:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React app!!!"));
  }
}

export default App;
