import React, { Component } from 'react';
import ForeignMethods from './ForeignMethods'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    const {nickName, students} = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ForeignMethods students={students} nickName={nickName} />
      </div>
    );
  }
}

export default App;
