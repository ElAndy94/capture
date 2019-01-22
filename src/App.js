import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';
import Photography from './containers/Photography/Photography';
import Contact from './containers/Contact/Contact';
import AboutMe from './containers/AboutMe/AboutMe';
import Shop from './containers/Shop/Shop';
import Tuition from './containers/Tuition/Tuition';
import OpeningPage from './containers/OpeningPage/OpeningPage';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={OpeningPage} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path='/photography' component={Photography} />
        <Route path='/contact' component={Contact} />
        <Route path='/aboutMe' component={AboutMe} />
        <Route path='/shop' component={Shop} />
        <Route path='/tuition' component={Tuition} />
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
