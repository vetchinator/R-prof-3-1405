import React from 'react';
import ReactDom from 'react-dom';

import Message from '../Message/index.jsx'

import './style.css';

let button = () => {

    let msgArr = ['Привет!', 'Как дела?'];
    let app = document.getElementById('app');

    const messages = () => {
        return msgArr.map(name => {
            return (<Message name={ name } />);
        });
    }

    const msgPush = () => {
        msgArr.push('Нормально');

        ReactDom.render(
            <div className="wrapper">
                <div className="messages">
                    { messages() }
                </div>
                <button onClick={ msgPush } className="my-btn">Нажми</button>
            </div>
            , app);
    }

    return(
        <div className="wrapper">
            <div className="messages">
                { messages() }
            </div>
            <button onClick={ msgPush } className="my-btn">Нажми</button>
        </div>
    )
}

export default button;