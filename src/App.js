import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <h1>Does it work the way it is supposed to ?</h1>
            <h2>This should also work</h2>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           <h1> LEARN TO PUSH TO GITHUB</h1>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
