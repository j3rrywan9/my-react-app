import React from 'react';
import logo from './logo.svg';
import { Greeting } from './Greeting';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Jerry" numberOfMessages={100} />
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
      </header>
      <Person name="Max" age="28" />
      <Person name="Manu" age="29" >My Hobbies: Racing</Person>
      <Person name="Stephanie" age="26" />
    </div>
  );
}

export default App;
