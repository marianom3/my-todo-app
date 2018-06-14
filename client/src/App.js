import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      todos: []
    };
  }

  componentDidMount () {
    (async() => {
      const todos = await fetch("/api/todos");
      return await todos.json();
    })().then((todos) => this.setState({ todos: todos }));
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {this.state.todos.map((todo) => <li>{todo.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
