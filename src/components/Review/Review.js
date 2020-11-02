import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Route, Link } from 'react-router-dom';
import Axios from 'axios';

class Review extends Component {
    // State uses all reducers in index.js to bundle previous inputs and display them on the DOM
    state= {
        feedback: {
            HowFeeling: Number(this.props.reduxState.howFeelReducer),
            HowUnderstand: Number(this.props.reduxState.howUnderstandReducer),
            HowSupport: Number(this.props.reduxState.howSupportReducer),
            HowComment: this.props.reduxState.howCommentReducer
        }
    }
    // Upon click of submit will request post from router to update the feedback database
    handleSubmit = (event) => {
        console.log(`Adding feedback`, this.state.feedback);
        Axios.post('/feedback', this.state.feedback).then((response) => {
          console.log(response.data);
        }).catch((err) => {
          console.log(err);
        })
      }
      // Upon click will navigate user one screen back
      goBackClick = () => {
        this.props.history.push('/comments');
      }

  render() {
    return (
      <div className="Review">
          <h1>Review Your Feedback</h1>
          <ul>
              <li>Feelings: {this.state.feedback.HowFeeling}</li>
              <li>Understanding: {this.state.feedback.HowUnderstand}</li>
              <li>Support: {this.state.feedback.HowSupport}</li>
              <li>Comments: {this.state.feedback.HowComment}</li>
          </ul>
          <button onClick={this.handleSubmit}><Link to="/Success">Submit</Link></button>
        <br/>
        <button className='goBack' onClick={this.goBackClick}>Go Back</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState: reduxState
});
export default connect(putReduxStateOnProps)(Review);