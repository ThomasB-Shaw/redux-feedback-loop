import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css'
import Axios from 'axios';

class Admin extends Component {

    state= {
        feedback: []
        }

   componentDidMount = () => {
       this.getFeedback();
   }

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

   deleteClick =() => {
       let feedbackID= this.target.value
    Axios.delete(`/feedback/${feedbackID}`).then((response) => {
     console.log('In Delete', response);
     this.getFeedback();
   }).catch((error) => {
     console.log('error in delete', error);
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
                        return <tr key={info.id}>
                            <td>{info.feeling}</td>
                            <td>{info.understanding}</td>
                            <td>{info.support}</td>
                            <td>{info.comments}</td> 
                            <td><button value={info.id} onClick={this.deleteClick}>DELETE</button></td> 
                            </tr>
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