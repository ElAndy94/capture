import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Dashboard.css';
import melissaImage from '../../assets/img/dashboard.jpg';
import * as actions from '../../store/actions/index';
// import Button from '../../components/UI/Button/Button';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.props.onAccessPage();
  }

  render() {
    return (
      <div className="background-img">
        <div className="container">
          <h1 id="dash-title">Peliza Photography</h1>
          <div className="card mb-3 card-color">
            <img src={melissaImage} className="card-img-top max-height" alt={"melissaImage"} />
            <div className="card-body">
              <h5 className="card-title">Landscape Photo</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          {/* <Button btnType="Enter" clicked={this.onClicking}> Start Exploring </Button> */}
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
