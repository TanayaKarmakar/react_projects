import React from 'react';
import "./TextBox.css";
import "../../index.css";

const textbox = (props) => {
    return (
        <div className = "TextBoxContainer">
            <input type = "text" id = "idTxt"></input>
            <button 
                className = "ButtonSuccess MarginLeft" 
                onClick = {() => props.clicked(document.getElementById("idTxt").value)}>Add</button>
        </div>
    );
};

export default textbox;