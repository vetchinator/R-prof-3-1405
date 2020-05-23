import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

export default (props) => {
    let { name } = props;
    return (
        <div className="message">{ name }</div>
    )
}