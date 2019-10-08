import React, { Component } from 'react';
import './TodoItem.css';
import checkedmark from '../img/checked.svg';
import uncheckedmark from '../img/unchecked.svg';

class TodoItem extends Component {

    render() {
        const { item, onClick } = this.props;
        let className = 'TodoItem';
        let url = uncheckedmark;
        if(item.isComplete) {
            url = checkedmark;
        }
        if(item.isComplete) {
            className += ' TodoItem-complete'
        }
        return (
            <div className={className}>
                <img onClick={onClick} src={url} width={32}/>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;