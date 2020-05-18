import React from 'react';
import ReactDom from 'react-dom';


let SendMsg = props => {
    let msg = props.arr.map(name => {
    return (<div><p>{ name }</p></div>)
    });
return (<div>{ msg }</div>)
}

export default SendMsg; 