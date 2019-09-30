import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

var todoItems = [
  { title: 'Self-learn ', isComplete: true },
  { title: 'Do family chores', isComplete: true},
  { title: 'Learn Truth', isComplete: false}
];
class App extends Component {
  constructor() {
    super();
  
    this.state = {
      todoItems: todoItems
    }
    this.onItemClick = this.onItemClick.bind(this)
    this.dbCommit = this.dbCommit.bind(this)
  }
  switchStatus(item) {
    item.isComplete = !item.isComplete;
    return item
  } 
  dbCommit(itemAfterModified) {
    todoItems.map((item) => {
      if(item.title === itemAfterModified.title) return item
    })
  }
  onItemClick(e) {
    
    let title = e.target.innerHTML;
    let { todoItems } = this.state;
    let itemAfterModified = this.switchStatus(todoItems.find((item) => item.title === title));
    this.dbCommit(itemAfterModified);
    this.setState({
      todoItems: todoItems
    })
    
  }
  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
      
        {/* <TodoItem title='Go to school' />
        <TodoItem title='Go swimming' />
      */}
        {
          todoItems.length > 0 && todoItems.map((item, index) => 
            <TodoItem key = {index} item = {item} onClick = { this.onItemClick } />
          )
        }
        {  todoItems.length === 0 && "Nothing here" }
      </div>
    );
    }
}

export default App;
