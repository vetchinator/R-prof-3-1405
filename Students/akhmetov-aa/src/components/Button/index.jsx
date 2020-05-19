import React from 'react';
import ReactDom from 'react-dom';

import Message from '../Message/index.jsx'

import './style.css';

let button = () => {

    let msgArr = [];
    let app = document.getElementById('app');

    const msgPush = () => {
        msgArr.push('Нормально');

        let message = msgArr.map(name => {
            return (<Message name={ name } />);
        });

        ReactDom.render(
            <div className="wrapper">
                <div className="messages">
                    { message }
                </div>
                <button onClick={ msgPush } className="my-btn">Нажми</button>
            </div>
            , app);
    }

    return(
        <div className="wrapper">
            <div className="messages">
            </div>
            <button onClick={ msgPush } className="my-btn">Нажми</button>
        </div>
    )
}

export default button;