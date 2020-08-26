import React from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Button</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello I'm Lee
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://baidu.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
