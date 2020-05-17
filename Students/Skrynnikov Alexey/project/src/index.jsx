import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css'
import Message from './components/Message.jsx';


let container = document.getElementById('app');

let arr = ['Привет', 'Как дела?'];

let button = document.getElementById('button');
button.addEventListener('click', () => {
    arr.push('Нормально');
    ReactDom.render(
        <Message arr = { arr } />
    , container)
})

ReactDom.render(
        <Message arr = { arr } />
    , container);
