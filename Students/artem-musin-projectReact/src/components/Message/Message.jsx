import React from 'react';
import ReactDom from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap';

import './style.css';


export default (props) => {

    let { sender, text } = props;

    // sender = sender ? sender : 'Bot';

    return (
        <div className="d-flex flex-column w-75 msg">
            { sender && <strong>{ sender }</strong> }
            { !sender && <strong>Bot</strong>}
            <p>{ props.sender || (!props.sender && text) ? text : 'Bot tells you that he cant response more than this'}</p>
        </div>
    )
}