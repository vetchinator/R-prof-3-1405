import React from 'react';

import MessagesField from '../MessagesField/MessagesField.jsx';
import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';

import './style.css';

import PropTypes from 'prop-types';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number
    };
    static defaultProps = {
        chatId: 1
    };

    render() {
        return (
            <div>
                <Header chatId = { this.props.chatId }/>
                <div className="d-flex w-100 justify-content-center">
                    <div className="pr-5 mr-3 chl">
                        <ChatList/>
                    </div>
                    <div className="mf">
                        <MessagesField/>
                    </div>
                </div>
            </div>
        )
    }
};