import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class HowFeeling extends Component {

    state = {
        feelingRating: 0
      }
      
    handleChange = (event) => {
        this.setState({
            feelingRating: event.target.value
        });
        console.log(this.state.feelingRating);
    }

    nextClick = () => {
      this.props.dispatch({type:'HOW_FEEL', payload: this.state.feelingRating})
    }
  render() {
    return (
      <div className="howFeeling">
          <h1>How Are you feeling today?</h1>
          <label forHtml='input'>Feeling?</label>
          <input id ='input' type='number' min='1' max='5' onChange={(event) => this.handleChange(event)} />
          <button onClick={this.nextClick}><Link to="/understand">Next</Link></button>
        <br/>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState: reduxState
});
export default connect(putReduxStateOnProps)(HowFeeling);