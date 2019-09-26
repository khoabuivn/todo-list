import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    
    constructor() {
        super();
        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick() {
        console.log(this.props.item)
    }

    render() {
        const { item } = this.props;
        let className = 'TodoItem';
        if(item.isComplete) {
            className += ' TodoItem-complete'
        }
        return (
            <div onClick={ this.onItemClick } className={className}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;