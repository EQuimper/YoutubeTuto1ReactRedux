import React from 'react';
import logo from './logo.svg';
import './App.css';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
}

const App = () => (
  <div style={styles.root}>
    <h1>Hello</h1>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
);

export default App;
