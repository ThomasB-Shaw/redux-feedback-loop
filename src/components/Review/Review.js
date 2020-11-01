import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Review extends Component {

    state= {
        feedback: {
            HowFeeling: Number(this.props.reduxState.howFeelReducer),
            HowUnderstand: Number(this.props.reduxState.howUnderstandReducer),
            HowSupport: Number(this.props.reduxState.howSupportReducer),
            HowComment: this.props.reduxState.howCommentReducer
        }
    }

    handleSubmit = (event) => {
        console.log(`Adding feedback`, this.state.feedback);
        Axios.post('/feedback', this.state.feedback).then((response) => {
          console.log(response.data);
        }).catch((err) => {
          console.log(err);
        })
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
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState: reduxState
});
export default connect(putReduxStateOnProps)(Review);