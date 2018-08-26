import React, { Component } from 'react';
import BaseView from './components/BaseView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
       <BaseView/>
      </div>
    );
  }
}

export default App;
