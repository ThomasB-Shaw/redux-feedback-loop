import React, { Component } from 'react';
import { connect } from 'react-redux';

class Success extends Component {


    handleSubmit = () => {
        this.props.history.push('/');
      }

  render() {
    return (
      <div className="Review">
          <h1>Thank You for Your Feedback!!!</h1>
          <button onClick={this.handleSubmit}>Return</button>
        <br/>
      </div>
    );
  }
}

export default Success;