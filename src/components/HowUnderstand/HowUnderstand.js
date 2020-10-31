import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class HowUnderstand extends Component {

    state = {
        understandRating: 0
      }

    handleChange = (event) => {
        this.setState({
            understandRating: event.target.value
        });
        console.log(this.state.feelingRating);
    }
    nextClick = () => {
      this.props.dispatch({type:'HOW_UNDERSTAND', payload: this.state.feelingRating})
    }
  render() {
    return (
      <div className="howFeeling">
          <h1>How well are you understanding the content?</h1>
          <label forHtml='input'>Understanding?</label>
          <input id ='input' type='number' min='1' max='5' onChange={(event) => this.handleChange(event)}/>
          <button onClick={this.nextClick}><Link to="/understand">Next</Link></button>
        <br/>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState: reduxState
});
export default connect(putReduxStateOnProps)(HowUnderstand);