import React from 'react';
import ReactDom from 'react-dom';

import Message from '../Message/Message.jsx';


let container = document.getElementById('app');

let msgArr = [];

let button = document.getElementById('btn');
button.addEventListener('click', () => {
    msgArr.push('Нормально');
    ReactDom.render(
        <Message arr = { msgArr }/> 
    , container)
})
