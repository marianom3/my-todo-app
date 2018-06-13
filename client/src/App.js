import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      response: ''
    };
  }

  componentDidMount () {
    (async() => {
      const response = await fetch("/api/hello");
      return await response.json();
    })().then(response => this.setState({ response: response.message }));
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
      </div>
    );
  }
}

export default App;
