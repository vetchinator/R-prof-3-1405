import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header w-100">
                <p>Chat App</p>
            </div>
        );
    }
}