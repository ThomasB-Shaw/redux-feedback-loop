import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js'
import { HashRouter as Router, Route } from 'react-router-dom';
import HowFeeling from '../HowFeeling/HowFeeling.js';
import HowUnderstand from '../HowUnderstand/HowUnderstand.js';
import HowSupport from '../HowSupported/HowSupported.js';
import HowComment from '../HowComment/HowComment.js';
import Review from '../Review/Review.js';
import Admin from '../Admin/Admin.js';
import Success from '../Success/Success.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <br/>
        
        {/* Route collection */}
        <Route exact path='/' component={HowFeeling}/>
        <Route exact path='/understand' component={HowUnderstand}/>
        <Route exact path='/support' component={HowSupport}/>
        <Route exact path='/comments' component={HowComment}/>
        <Route exact path='/review' component={Review}/>
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/success' component={Success}/>
      </div>
      </Router>
    );
  }
}

export default App;
