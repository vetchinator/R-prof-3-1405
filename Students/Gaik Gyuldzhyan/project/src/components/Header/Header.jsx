import React from 'react'
import ReactDOM from 'react-dom';
import './style.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className="text-center bg-dark w-100">
                <h1 className="text-light">Chat</h1>
            </div>
        );
    }
}
