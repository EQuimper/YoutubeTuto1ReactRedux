import React from 'react';
import { NavBar } from './modules/';
import logo from './logo.svg';
import './App.css';

const App = ({ children }) => (
  <div>
    <NavBar />
    {children}
  </div>
);

export default App;
