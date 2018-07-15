import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './config/router';
import {  Router,BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return [
      <div className="App"> this is app
     
      </div>,
      <Router history={BrowserRouter}>
        <Routes/>
      </Router>
    ]
  }
}

export default App;
