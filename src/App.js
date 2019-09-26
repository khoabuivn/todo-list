import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
        { title: 'Self-learn ', isComplete: true },
        { title: 'Do family chores', isComplete: true},
        { title: 'Learn Truth', isComplete: false}
    ]
}
  render() {
    return (
      <div className="App">
      
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
