import React from 'react';
import ReactDom from 'react-dom';

export default (props) => {
    let { name, text } = props;
    return (
        <div>
            {name && <p><b>{ name } says:</b> Luke, I am your father!</p>}
                     <p><b>Luke:</b> { text }</p>
        </div>
    )
}