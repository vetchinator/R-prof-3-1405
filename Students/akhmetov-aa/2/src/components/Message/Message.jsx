import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

export default (props) => {
    let { sender, text } = props;
    return (
        <div>
            <strong>{ sender }</strong>
            <p>{ text }</p>
        </div>
    )
}