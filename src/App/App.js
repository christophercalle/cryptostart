import React, { Component } from 'react'
import './App.css';
import Welcome from './Welcome';
import AppLayout from './AppLayout';

export class App extends Component {
  render() {
    return (
      <AppLayout>
        <Welcome />
      </AppLayout>
    )
  }
}

export default App;

