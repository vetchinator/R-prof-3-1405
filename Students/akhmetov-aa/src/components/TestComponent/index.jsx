import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

let content = (props) => {
    let { names } = props;
    let markup = names.map(name => {
        return(
            <h1>{ name } page</h1>
        )
    });

    return(
        <div>{ markup }</div>
    )

}

export default content;