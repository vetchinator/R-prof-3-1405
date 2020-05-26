import React from 'react';
// import ReactDom from 'react-dom';
import './style.css';

export default (props) => {
    //props: sender, text
    let { sender, text } = props;

    // sender = sender ? sender : 'Bot';
    //dopil
    return (
        <div>        
        { sender && <div className="d-flex flex-column sender msg"><strong>{ sender }</strong><p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p></div> }
        { !sender && <div className="d-flex flex-column recipient msg"><strong>Bot</strong><p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p></div> }
        </div>    
        
        // <div className="d-flex flex-column msg">
        //     { sender && <strong>{ sender }</strong> }
        //     { !sender && <strong>Bot</strong> }
        //     <p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p>
        // </div>
    )
}