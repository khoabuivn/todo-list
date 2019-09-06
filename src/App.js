import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
        // { title: 'Self-learn ', isComplete: true },
        // { title: 'Do family chores'},
        // { title: 'Learn Truth'}
    ]
}
  render() {
    return (
      <div className="App">
      {/*  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <TodoItem title='Go to school' />
        <TodoItem title='Go swimming' />
      */}
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) => 
            <TodoItem key = {index} item={item} />
          )
        }
        {  this.todoItems.length === 0 && "Nothing here" }
      </div>
    );
    }
}

export default App;
