import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css'
import Axios from 'axios';
import Info from '../Info/Info.js'

class Admin extends Component {

    state= {
        feedback: []
        }
    // On Mount of DOM will fire off GET Request to display all info in a table format
   componentDidMount = () => {
       this.getFeedback();
   }
   // Get Request to place all database info into the feedback state to be used and displayed
   getFeedback =() => {
       Axios.get('/feedback').then((response) => {
        console.log(response.data);
        this.setState({
            feedback: response.data
        })
      }).catch((error) => {
        console.log('error', error);
      });
   }

  render() {
    return (
      <div className="Admin">
          <h1>Review All Feedback</h1>
          <table>
              <thead>
                  <tr>
                      <th>Feeling</th>
                      <th>Understanding</th>
                      <th>Support</th>
                      <th>Comments</th>
                      <th>DELETE</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.feedback.map((info) => {
                        return <Info getFeedback={this.getFeedback} info ={info} />
                    })}
              </tbody>
          </table>
        <br/>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState: reduxState
});
export default connect(putReduxStateOnProps)(Admin);