import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import checkall from './img/checkall.svg';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      todoItems: [
        { title: 'Self-learn ', isComplete: true },
        { title: 'Do family chores', isComplete: true},
        { title: 'Learn Truth', isComplete: false}
      ]
    }
    this.onItemClick = this.onItemClick.bind(this)
  }
  
  onItemClick(item) {
    return (event) => {
      const isComplete = !item.isComplete;
      const { todoItems } = this.state;
      const index = this.state.todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...this.state.todoItems.slice(0, index),
          { 
            ...item,
            isComplete: isComplete
          },
          ...this.state.todoItems.slice(index + 1)
        ]
      })
    } 
    
  }
  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        
        {/* <TodoItem title='Go to school' />
        <TodoItem title='Go swimming' />
      */}
      <div className="wrapper">
        <div className="Header">
          <img src={checkall} width={32}/>
          <input type="Text" placeholder="Add an item" />
        </div>
        {
          todoItems.length > 0 && todoItems.map((item, index) => 
            <TodoItem 
              key = {index} 
              item = {item} 
              onClick = { this.onItemClick(item) } 
            />
          )
        }
        {  todoItems.length === 0 && "Nothing here" }
        </div>
      </div>
    );
    }
}

export default App;
