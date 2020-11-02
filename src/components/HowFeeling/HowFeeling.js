import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Route, Link } from 'react-router-dom';

class HowFeeling extends Component {

    state = {
        feelingRating: 0
      }
    // Function controls changes within the input on the dom
    handleChange = (event) => {
        this.setState({
            feelingRating: event.target.value
        });
    }
    // Upon Click will send info to the HowFeelingReducer in index.js to be stored
    nextClick = () => {
      this.props.dispatch({type:'HOW_FEEL', payload: this.state.feelingRating})
    }

  render() {
    return (
      <div className="howFeeling">
          <h1>How Are you feeling today?</h1>
          <label forHtml='input'>Feeling?</label>
          <input id ='input' type='number' min='1' max='5' onChange={(event) => this.handleChange(event)} />
          { this.state.feelingRating === 0 ?
          <p>Please Ensure the info field is filled in, Thank you!</p>
          :
          <button onClick={this.nextClick}><Link to="/understand">Next</Link></button>
              }
        <br/>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState: reduxState
});
export default connect(putReduxStateOnProps)(HowFeeling);