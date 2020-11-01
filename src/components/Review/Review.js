import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Review extends Component {
  render() {
    return (
      <div className="Review">
          <h1>Review Your Feedback</h1>
          <ul>
              <li>Feelings: {this.props.reduxState.howFeelReducer}</li>
              <li>Understanding: {this.props.reduxState.howUnderstandReducer}</li>
              <li>Support: {this.props.reduxState.howSupportReducer}</li>
              <li>Comments: {this.props.reduxState.howCommentReducer}</li>
          </ul>
          <button>Submit</button>
        <br/>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState: reduxState
});
export default connect(putReduxStateOnProps)(Review);