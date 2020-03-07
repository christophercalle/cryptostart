import React, { Component } from 'react'
import './App.css';
import Welcome from './Welcome';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

export class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar />
        <Welcome />
      </AppLayout>
    )
  }
}

export default App;

