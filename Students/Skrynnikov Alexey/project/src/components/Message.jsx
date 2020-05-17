import React from 'react';
import ReactDom from 'react-dom';


let message = props => {
    let msgarr = props.arr.map(msg => {
    return (<div><p>{ msg }</p></div>)
    });
return (<div>{ msgarr }</div>)
}


export default message;