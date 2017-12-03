import React, { Component } from 'react';
import './App.css';
import Profile from './Profile/profile.js'
import Navbar from './Navbar/navbar.js';
import Main from './MainContainer/mainbody.js';
import {
  Router,
} from 'react-router-dom';
import history from './history';


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Navbar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
