import React from 'react'
import ReactDOM from 'react-dom';
import './style.css'

import Header from '../Header/Header.jsx'
import ChatList from '../ChatList/ChatList.jsx'
import MessagesField from '../MessageField/MessageField.jsx'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
                <div className ="d-flex flex-direction-row">
                    <div className="d-flex justify-content-center rooms">
                        <ChatList />
                    </div>
                    <div className="opened-chat">
                        <Header />
                        <MessagesField user={ this.props.user }/>
                    </div>
                </div>
        )
    }
}