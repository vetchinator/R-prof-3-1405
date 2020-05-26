import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

export default (props) => {
    let { sender, text } = props;

    if(sender) {
        return (
            <div className= 'd-flex flex-column msg' >
                <strong>{ sender }</strong> 
                <p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p>
            </div>
        )
    } else {
        return (
            <div className= 'd-flex flex-column msgbot' >
                 <strong>Bot</strong> 
                <p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p>
            </div>
        )
    }
};
