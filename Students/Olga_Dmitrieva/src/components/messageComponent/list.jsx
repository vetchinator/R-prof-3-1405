import React from 'react';
import ReactDom from 'react-dom';

export default (props) => {
    let name = props.name;
    return (
        <li key={name.toString()}>{name}</li>
    )
}