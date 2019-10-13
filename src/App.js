import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import checkall from './img/checkall.svg';
import classnames from 'classnames';

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      newItem: "",
      currentFilter: "All", // all, active
      todoItems: [
        { title: 'Self-learn ', isComplete: true },
        { title: 'Do family chores', isComplete: true},
        { title: 'Learn Truth', isComplete: false}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this)
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
        currentFilter: this.state.currentFilter,
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

  changeFilter(event) {
    const currentFilter = event.target.innerHTML;
    this.setState({
      newItem: this.state.newItem,
      currentFilter: currentFilter,
      todoItems: [
        ...this.state.todoItems
      ]
    })
  }

  checkAll() {
    const { todoItems } = this.state;

    this.setState({
      ...this.state,
      todoItems: [
        ...todoItems.map(function(item) {
          return { title: item.title, isComplete: true}
        })
      ]
    })
  }

  clearCompleted() {
    this.setState({
      ...this.state,
      todoItems: [
        ...this.state.todoItems.filter((item) => item.isComplete === false)
      ]
    })
  }

  render() {
    const { todoItems, newItem, currentFilter } = this.state;
    let count =  todoItems.filter(item => item.isComplete === false).length;
    let todoItemsFiltered = todoItems.filter(function(item) {
      switch(currentFilter) {
        case "Completed":
          if(item.isComplete === true)
          return item;
          break;
        case "Active":
          if(item.isComplete === false)
          return item;
          break;
        default: 
          return item;
          break;
      }
    })
    return (
      <div className="App">
        
        {/* <TodoItem title='Go to school' />
        <TodoItem title='Go swimming' />
      */}
      <div className="wrapper">
        <div className="Header">
          <img src={checkall} width={32} alt="logo" onClick={this.checkAll}/>
          <input 
            type="Text" 
            placeholder="Add an item" 
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </div>
        {
          todoItemsFiltered.length > 0 && todoItemsFiltered.map((item, index) => 
            <TodoItem 
              key = {index} 
              item = {item} 
              onClick = { this.onItemClick(item) } 
            />
          )
        }
       
    
        <div className="footer">
          <span className="todo-count">
            {
              count > 1 && count + " items left"
            }
            {
              count <= 1 && count + " item left"
            }
            </span>
          <ul className="filters">
            <li>
              <a className={classnames({
                selected: currentFilter === "All"
              })} onClick={this.changeFilter}>All</a>
            </li>
            <li>
              <a className={classnames({
                selected: currentFilter === "Active"
              })} onClick={this.changeFilter}>Active</a>
            </li>
            <li>
              <a className={classnames({
                selected: currentFilter === "Completed"
              })} onClick={this.changeFilter}>Completed</a>
            </li>
          </ul>
          <button className={classnames('clear-completed', {
            active: todoItemsFiltered.find((item) => item.isComplete === true) 
          })} onClick={this.clearCompleted}>Clear Completed</button>
        </div>
  

        {  todoItemsFiltered.length === 0 && "" }

      </div>
      </div>
    );
    }
}

export default App;
