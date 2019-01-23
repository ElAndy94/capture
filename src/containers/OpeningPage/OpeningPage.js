import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import './OpeningPage.css';
import Button from '../../components/UI/Button/Button';

class OpeningPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false
    }

    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  onButtonClicked() {
    this.setState({ buttonClicked: true });
  }

  render() {
    if (this.state.buttonClicked) {
      return <Redirect to="/dashboard"/>;
    }

    return (
      <div className="App-opening">
        <p> Capture Feelings </p>
        <Button btnType="Enter" clicked={this.onButtonClicked}> Start Exploring </Button>
      </div>
    );
  };
}

export default withRouter(OpeningPage);
