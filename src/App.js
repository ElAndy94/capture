import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Button from './components/UI/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App-dashboard">
        <p> Capture Feelings </p>
        <Button btnType="Enter"> Start Exploring </Button>
      </div>
    );
  }
}

export default App;
