import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Dashboard.css';
import Button from '../../components/UI/Button/Button';

class Dashboard extends Component {
  render() {
    return (
      <div className="App-dashboard">
        <p> Capture Feelings </p>
        <Button btnType="Enter"> Start Exploring </Button>
      </div>
    );
  }
}

export default withRouter(Dashboard);
