import React, { Component } from 'react';
import './App.css';
import {
  Router,
} from 'react-router-dom';
import history from './history';
import StateContainer from './MainContainer/StateContainer';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <StateContainer />
      </Router>
    );
  }
}

export default App;
