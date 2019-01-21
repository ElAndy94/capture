import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends Component {
  
  render () {
    return (
      <Aux>
        {
          this.props.isClear ?
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

export default Layout;