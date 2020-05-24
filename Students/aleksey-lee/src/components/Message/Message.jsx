import React from 'react';
// import ReactDom from 'react-dom';
import './style.css';

export default (props) => {
    //props: sender, text
    let { sender, text } = props;

    sender = sender ? sender : 'Bot';
    //dopil
    return (
        <div className={(sender=='Bot') ? 'd-flex flex-column msg' : 'd-flex flex-column msg text-right'}>
            { <strong>{ sender }</strong> }
            <p>{ props.sender || (!props.sender && text) ? text : 'cyber answer...' }</p>
        </div>
    )
}