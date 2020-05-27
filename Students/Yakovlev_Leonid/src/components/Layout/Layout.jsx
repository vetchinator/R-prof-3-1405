import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Header from '../Header/Header.jsx';
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { user } = this.props;

        return (
            <div className="d-flex w-100 justify-content-center messenger-layout mt-4 mb-4">
                <div className="d-flex flex-column w-100 messenger-wrapper">
                    <Header />
                    <div className="d-flex justify-content-between">
                        <ChatList />                    
                        <MessageField user={ user } />                                     
                    </div>
                </div>
            </div>
        );
    }
}