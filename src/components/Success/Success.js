import React, { Component } from 'react';

// Page presented upon successful submission of info to the feedback DataBase

class Success extends Component {

    // Upon click will return the user to the beginning of the process
    handleReturn = () => {
        this.props.history.push('/');
      }

  render() {
    return (
      <div className="Review">
          <h1>Thank You for Your Feedback!!!</h1>
          <button onClick={this.handleReturn}>Return</button>
        <br/>
      </div>
    );
  }
}

export default Success;