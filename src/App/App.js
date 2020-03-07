import React, { Component } from 'react'
import './App.css';
import Welcome from './Welcome';
import styled, {css} from 'styled-components';

export class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
      </div>
    )
  }
}

export default App;

