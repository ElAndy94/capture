import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends Component {
  
  render () {
    return (
      <Aux>
        {
          this.props.accessedPage ?
          <div>
            <Toolbar />
            <main className="Content">{this.props.children}</main>
          </div>
          :
          <div>
            <main>{this.props.children}</main>
          </div>
        }
      </Aux>
    );
  };
};

const mapStateToProps = state => ({
  accessedPage: state.auth.accessedPage,
});

export default connect(mapStateToProps, null)(Layout);