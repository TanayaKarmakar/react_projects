import React from 'react';
import './Todo.css';

const todo = (props) => {
    return (
        <div className = "TodoContainer">
            <div className = "TodoItemContainer">
                <div className = "TodoItem">
                    {props.name}
                </div>
                <div className = "TodoItem FloatRight">
                    <button 
                        className = "ButtonRed"
                        onClick = {props.clicked}>Delete</button>
                </div>
            </div>
        </div>
    )
};

export default todo;