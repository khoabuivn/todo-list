import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import checkall from './img/checkall.svg';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      newItem: "",
      todoItems: [
        { title: 'Self-learn ', isComplete: true },
        { title: 'Do family chores', isComplete: true},
        { title: 'Learn Truth', isComplete: false}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this)
  }
  
  onItemClick(item) {
    return (event) => {
      const isComplete = !item.isComplete;
      const { todoItems } = this.state;
      const index = this.state.todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          { 
            ...item,
            isComplete: isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    } 
    
  }

  onKeyUp(event) {
    if(event.keyCode === 13) {
      let text = event.target.value;
      if(!text) { return }
  
      text = text.trim();
      if(!text) { return }
  
      this.setState({
        newItem: "",
        todoItems: [
          { title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })

    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value,
    })
  }

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="App">
        
        {/* <TodoItem title='Go to school' />
        <TodoItem title='Go swimming' />
      */}
      <div className="wrapper">
        <div className="Header">
          <img src={checkall} width={32} alt="logo"/>
          <input 
            type="Text" 
            placeholder="Add an item" 
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
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
