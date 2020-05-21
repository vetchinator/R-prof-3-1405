import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

import MessageText from '../MessageText/index.jsx';

let componentMessageContainer = (props) => {   

    let messageArray = props.messages.map(message => {
        return (<MessageText text={ message } />);
    });

    return (<div className="message-container">{ messageArray }<button className="btn btn-success sent-button">Отправить</button></div>)    

};

export default componentMessageContainer;