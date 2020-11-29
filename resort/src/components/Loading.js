import React from 'react';
import '../App.css';
import loadingDif from '../images/gif/loading-arrow.gif';

const Loading = () => (
    <div className = "loading">
        <h4>rooms data loading...</h4>
        <img src = {loadingDif} alt = "" />
    </div>
);

export default Loading;