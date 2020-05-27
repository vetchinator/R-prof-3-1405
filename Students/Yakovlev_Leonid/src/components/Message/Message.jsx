import React from 'react';
// import ReactDom from 'react-dom';
import './style.css';

export default (props) => {
    //props: sender, text
    let { sender, 
        text } = props;

    // sender = sender ? sender : 'Bot';
    //dopil
    if (sender) {
        return (
            <div className="d-flex flex-column msg my-text">
                <span><strong>{ sender }</strong></span>
                <p>{ text }</p>
            </div>
            
        );
    }     
    else {
        return (
            <div className="d-flex flex-column msg bot">
                <span><strong>Bot</strong></span>
                <p>{ (!sender && text) ? text : 'cyber answer...' }</p>
            </div>
        );        
    } 

}