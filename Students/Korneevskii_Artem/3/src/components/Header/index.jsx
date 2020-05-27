import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export default class Header extends Component {
    render() {
        return (
            <div className="messenger-header w-100">
                <p>MyMessenger</p>
            </div>
        );
    }
}