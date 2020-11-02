import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Route, Link } from 'react-router-dom';

class HowSupport extends Component {

    state = {
        supportRating: 0
      }
      // Function controls changes within the input on the dom
    handleChange = (event) => {
        this.setState({
            supportRating: event.target.value
        });
    }
    // Upon click will send info to the HowSupportReducer in index.js to be stored
    nextClick = () => {
      this.props.dispatch({type:'HOW_SUPPORT', payload: this.state.supportRating})
    }
    // Upon click will navigate user one screen back
    goBackClick = () => {
      this.props.history.push('/understand');
    }

  render() {
    return (
      <div className="howSupport">
          <h1>How well are you being supported?</h1>
          <label forHtml='input'>support?</label>
          <input id ='input' type='number' min='1' max='5' onChange={(event) => this.handleChange(event)} />
          { this.state.supportRating === 0 ?
          <p>Please Ensure the info field is filled in, Thank you!</p>
          :
          <button onClick={this.nextClick}><Link to="/comments">Next</Link></button>
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
export default connect(putReduxStateOnProps)(HowSupport);