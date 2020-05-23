import React from 'react';
import ReactDom from 'react-dom';
import './style.css'

export default (props) => {
    //props: sender, text
    let { sender, text } = props;
    //sender = sender ? sender: 'Bot';

//msg - d-flex flex-column 
    return (
        <div className="msg"
        style = {{alignSelf: sender ?
            'flex-end': 'flex-start'}}>
            { sender && <strong>{ sender }</strong>}
            { !sender && <strong>Bot</strong>}
            <p>{ props.sender || (!props.sender && text) ? text : 'cyber answer' }</p>
        </div>
    )
}
    
