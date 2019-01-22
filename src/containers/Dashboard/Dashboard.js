import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Dashboard.css';
import * as actions from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentWillMount() {
    this.props.onAccessPage();
  }

  onClicking() {
    console.log(this.props.accessedPage);
  }

  render() {

    return (
      <div className="background-img">
        <div className="container">
          <h1 id="dash-title">Hi</h1>
          <Button btnType="Enter" clicked={this.onClicking}> Start Exploring </Button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  accessedPage: state.auth.accessedPage,
});

const mapDispatchToProps = dispatch => ({
  onAccessPage: () => dispatch( actions.auth() ),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
