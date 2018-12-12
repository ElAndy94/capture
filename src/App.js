import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Button from './components/UI/Button/Button';

class App extends Component {
  render() {
    return (
      <header className="App-header">
        <p> Capture Feelings </p>
        <Button btnType="Enter"> Start Exploring </Button>
      </header>
    );
  }
}

export default App;
