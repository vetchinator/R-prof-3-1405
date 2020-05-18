import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';

import MessageField from './components/MessageField/index.jsx';

let messages = ['Привет', 'Как дела?'];

ReactDom.render(
    <MessageField messages={ messages } />,
    document.getElementById('app'),
);

let textArea = document.querySelector('textarea');
let btnSubmit = document.querySelector('input[type=submit]');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(textArea.value.length > 0) {
        messages.push(textArea.value);
        textArea.value = '';

        ReactDom.render(
            <MessageField messages={ messages } />,
            document.getElementById('app'),
        );
    }
});
