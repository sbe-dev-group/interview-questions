import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../src/components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="align-title">Reservation-Info</h2>
        <Home />
      </header>
    </div>
  );
}

export default App;
