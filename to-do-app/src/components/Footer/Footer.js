import React from 'react';
import './Footer.css';

const footer = (props) => {
    return (
        <div className = "FooterRootContainer">
            {props.message}
        </div>
    );
};

export default footer;