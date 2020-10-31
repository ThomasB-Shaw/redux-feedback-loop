import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class HowSupport extends Component {

    state = {
        supportRating: 0
      }
      
    handleChange = (event) => {
        this.setState({
            supportRating: event.target.value
        });
        console.log(this.state.supportRating);
    }

    nextClick = () => {
      this.props.dispatch({type:'HOW_SUPPORT', payload: this.state.supportRating})
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
export default connect(putReduxStateOnProps)(Howsupport);