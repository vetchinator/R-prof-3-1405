import React from 'react';
import ReactDom from 'react-dom';

export default (props) => {
    let { name } = props;
    
    return (
        <div>
            <p><b>{ name } says:</b> Luke, I am your father!</p>
            <p><b>Luke:</b> NOOOOOO!</p>
        </div>
    )
}