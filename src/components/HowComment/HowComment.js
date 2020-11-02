import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as  Route, Link } from 'react-router-dom';

class HowComment extends Component {

    state = {
        comment: ''
      }
    // Handles changes within the input on the DOM
    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    }
    // Upon Click will send info to the HowCommentReducer in index.js to be stored
    nextClick = () => {
      this.props.dispatch({type:'HOW_COMMENT', payload: this.state.comment})
    }
    // On Click Returns user back to previous page
    goBackClick = () => {
      this.props.history.push('/support');
    }

  render() {
    return (
      <div className="howComment">
          <h1>Any comments you want to leave?</h1>
          <label forHtml='input'>Comments</label>
          <input id ='input' type='text' maxLength='250' onChange={(event) => this.handleChange(event)} />
          { this.state.comment === '' ?
          <p>Please Ensure the info field is filled in, Thank you!</p>
          :
          <button onClick={this.nextClick}><Link to="/review">Next</Link></button>
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
export default connect(putReduxStateOnProps)(HowComment);