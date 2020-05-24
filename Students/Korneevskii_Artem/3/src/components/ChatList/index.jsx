import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default class ChatList extends Component {
    render() {
        return (
            <div className="d-flex w-25 flex-column messenger-chatlist">
                <div className="chatlist">
                    <div className="chatname-wrap active">
                        <p>Чат 1</p>
                    </div>
                    <div className="chatname-wrap">
                        <p>Чат 2</p>
                    </div>
                    <div className="chatname-wrap">
                        <p>Чат 3</p>
                    </div>
                    <div className="chatname-wrap">
                        <p>Чат 4</p>
                    </div>
                    <div className="chatname-wrap">
                        <p>Чат 5</p>
                    </div>                                                                                
                </div>
            </div>
        );
    }
}