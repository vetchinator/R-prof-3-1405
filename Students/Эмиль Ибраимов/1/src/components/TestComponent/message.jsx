import React from 'react';
import ReactDom from 'react-dom';

import clickBtn from './index.jsx';



let message = () =>{
    return (
        <div>
        <button onClick = {clickBtn}>клик</button>
        </div>
    ) 
}

export default message 