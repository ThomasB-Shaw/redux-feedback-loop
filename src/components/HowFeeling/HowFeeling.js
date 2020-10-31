import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class HowFeeling extends Component {
  render() {

    state = {
        feelingRating: 0
      }
      
    return (
      <div className="howFeeling">
          <h1>How Are you feeling today?</h1>
          <label forHtml=''></label>
          <input type='number' min='1' max='5' />
          <button>Next</button>
        <br/>
      </div>
    );
  }
}

export default HowFeeling;