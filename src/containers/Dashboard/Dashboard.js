import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Dashboard.css';
// import Button from '../../components/UI/Button/Button';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {

    return (
      <div className="background-img">
        <div className="container">
          <p> Capture Feelings </p>
          {/* <Button btnType="Enter"> Start Exploring </Button> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
