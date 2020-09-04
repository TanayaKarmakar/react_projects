import React from 'react';
import './Todo.css';
import '../../../index.css';

const todo = (props) => {
    const itemTextClasses = ["TodoItem"];
    if(props.isCompleted) {
        itemTextClasses.push("TodoItemCompleted");
    }

    const styles = {
        lineHeight: '20px'
    };

    return (
        <div className="TodoContainer">
            <div className="TodoItemContainer">
                <div className={itemTextClasses.join(" ")} style = {styles}>
                    {props.name}
                </div>
                <div className = "TodoOptionContainer">
                    <div className="TodoItem">
                        <button 
                            className="ButtonSuccess"
                            onClick = {props.completed}>Complete</button>
                    </div>
                    <div className="TodoItem FloatRight">
                        <button
                            className="ButtonDanger"
                            onClick={props.clicked}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default todo;