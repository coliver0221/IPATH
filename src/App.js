import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div id="container">
        <div id="Oval-Copy"></div>
        <div id="Oval"></div>
        <div id="Rectangle"></div>
        <div id="Oval_in"></div>
        <video id="scanner"></video>

      </div>
      
    </div>
  );
}

export default App;
