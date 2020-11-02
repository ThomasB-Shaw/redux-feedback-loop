import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Route, Link } from 'react-router-dom';

class HowUnderstand extends Component {

    state = {
        understandRating: 0
      }
    // Handles changes with the input field on the DOM
    handleChange = (event) => {
        this.setState({
            understandRating: event.target.value
        });
    }
    // Upon Click will send info to the HowUnderstandReducer in index.js to be stored
    nextClick = () => {
      this.props.dispatch({type:'HOW_UNDERSTAND', payload: this.state.understandRating})
    }
    // On Click will navigate user back to the previous page in the process
    goBackClick = () => {
      this.props.history.push('/');
    }

  render() {
    return (
      <div className="howFeeling">
          <h1>How well are you understanding the content?</h1>
          <label forHtml='input'>Understanding?</label>
          <input id ='input' type='number' min='1' max='5' onChange={(event) => this.handleChange(event)}/>
          { this.state.understandRating === 0 ?
          <p>Please Ensure the info field is filled in, Thank you!</p>
          :
          <button onClick={this.nextClick}><Link to="/support">Next</Link></button>
              }
        <br/>
        <button className='goBack' onClick={this.goBackClick}>Go Back</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState: reduxState
});
export default connect(putReduxStateOnProps)(HowUnderstand);