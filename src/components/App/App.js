import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.js'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HowFeeling from '../HowFeeling/HowFeeling.js'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <br/>

        <Route exact path='/' component={HowFeeling}/>
      </div>
      </Router>
    );
  }
}

export default App;
