import React, { Profiler } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Profile from '../Profile/Profile.jsx';
import MessageField from '../MessageField/MessageField.jsx';

import './style.css';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        userName: PropTypes.string
    };
    static defaultProps = {
        chatId: 0,
    };

    render() {
        let user = 'Me';
        let userName = this.props.userName;
        
        return (
            <div className="layout__wrapper">
                <Header chatId={ this.props.chatId } userName={ userName } />
                <ChatList chatId={ this.props.chatId } />
                { userName !== 'Me' && <MessageField user={ user } /> }
                { userName === 'Me' && <Profile /> }
            </div>
        )
    }
}