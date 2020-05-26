import React from 'react';
import ReactDom from 'react-dom';

import './style.sass';

export default (props) => {
    let {sender, text} = props;
    return (
        <div className={"msg " + (props.sender ? "align-self-start" : "align-self-end")}>
            {sender && <strong>{ sender }</strong>}
            {!sender && <strong>Bot</strong>}
            <p>{ sender || (!sender && text) ? text : 'cyber answer...' }</p>
        </div>
    )
}