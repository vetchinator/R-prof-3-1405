import React, { useState } from 'react';
import ReactDom from 'react-dom';

import './style.css';

import Message from '../Message.jsx'


let test = props => {

    let msgArr = props.father.map(name => {
        return (<Message name={ name } text={ 'NOOOOOOOO!' }/>);
    });
    let [output, setOutput] = useState(msgArr)

return (
    <div>
        { output }
        <div>
            <button onClick={() => setOutput(output.concat(<Message text={ 'NOOOOOORMALNO!' }/>))}>
                NOOOOOORMALNO!
            </button>
        </div>        
    </div>)
}

export default test