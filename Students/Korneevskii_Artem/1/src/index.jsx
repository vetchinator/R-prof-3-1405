import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

import MessageContainer from './components/MessageContainer/index.jsx';

let mainContainer = document.getElementById('app');

let messages = ['Привет', 'Как день?' ,'Как дела?'];

function domRender() {
    ReactDOM.render(
        <MessageContainer messages={ messages } />,
        mainContainer
     );
}

domRender();

let sentButton = document.getElementsByClassName("sent-button")[0]; 

sentButton.onclick = function(event) {  
    messages.push('Нормально!');
    domRender();    
    event.preventDefault();
};