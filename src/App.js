import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    );

    return(
      <Layout>
        {routes}
      </Layout>
    );
  }
}

export default withRouter(App);
