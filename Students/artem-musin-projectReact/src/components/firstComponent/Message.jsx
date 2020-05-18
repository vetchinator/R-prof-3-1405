import React from 'react';
import ReactDom from 'react-dom';


export default (props) => {
    let { name } = props;
    return (
        <div>
            <p><b>{ name }:</b>Nah..</p>
            <br />
        </div>
    )
}