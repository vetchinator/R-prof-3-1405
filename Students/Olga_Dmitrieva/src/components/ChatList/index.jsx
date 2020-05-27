import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default class ChatList extends Component {
    render() {
        return (
            <div className="d-flex chatList-block w-25">
                <ul className="d-flex list-group chatList-list w-100">
                    <li className="list-group-item active">Активный чатик</li>
                    <li className="list-group-item">Чатик друзей</li>
                    <li className="list-group-item">Учебный чатик</li>
                    <li className="list-group-item">Рабочий чатик</li>
                    <li className="list-group-item">Рекламный чатик</li>
                </ul>
            </div>
        );
    }
}