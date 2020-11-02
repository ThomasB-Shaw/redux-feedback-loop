import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import './Info.css'

class Info extends Component {

   deleteClick =() => {
       let feedbackID= this.props.info.id
    Axios.delete(`/feedback/${feedbackID}`).then((response) => {
     console.log('In Delete', response);
     this.props.getFeedback();
   }).catch((error) => {
     console.log('error in delete', error);
   });
}


  render() {
    return (
        <tr key={this.props.info.id}>
            <td>{this.props.info.feeling}</td>
            <td>{this.props.info.understanding}</td>
            <td>{this.props.info.support}</td>
            <td>{this.props.info.comments}</td> 
            <td><button value={this.props.info.id} onClick={this.deleteClick}>DELETE</button></td> 
        </tr>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState: reduxState
});
export default connect(putReduxStateOnProps)(Info);