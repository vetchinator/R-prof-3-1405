import React from 'react';
import ReactDom from 'react-dom';

import MessageField from './MessageField/MessagesField.jsx';
import ChatList from './ChatList/ChatList.jsx'
import Header from './Header/Header.jsx';

export default function App() {
    let user = 'User1';
    return (
        <div className= "d-flex w-100 h-100 flex-column">
            <Header />
        <div className= "d-flex w-100 h-75">
            <ChatList />
            <MessageField user= {user} />
        </div>
        </div>
    )
}