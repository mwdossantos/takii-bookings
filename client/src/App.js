import React from 'react';
import logo from './logo.svg';
import './App.css';
import Visitors from './components/visitors/visitors'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Visitors />
      </header>
    </div>
  );
}

export default App;
