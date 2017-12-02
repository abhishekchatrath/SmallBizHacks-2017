import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile/profile.js'
import Navbar from './Navbar/navbar.js';
import Main from './MainContainer/mainbody.js';

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
