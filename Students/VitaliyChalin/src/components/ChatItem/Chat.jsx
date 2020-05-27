import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import './style.css';

export default class ChatList extends React.Component {
    render(props) {
        
        return (
            <Link to={{
                pathname: `/chat/${ this.props.chatId  }/`,
                userName: this.props.userName
            }}>
                <ListItem className="user__wrapper"
                    style={ { color: '#fff' } }
                    primaryText={ this.props.userName }
                    leftAvatar={<Avatar src="https://via.placeholder.com/64" className="user__avatar" />}
                    rightIcon={<CommunicationChatBubble />}
                    hoverColor="#41506d"
                />
            </Link>
        )
    }
}
