import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import './style.css';


export default (props) => {

    return (
        <List className="users__wrapper" >
            <ListItem className="user__wrapper"
                style={ { color: '#fff' } }
                primaryText="Brendan Lim"
                leftAvatar={<Avatar src="https://via.placeholder.com/64" className="user__avatar" />}
                rightIcon={<CommunicationChatBubble />}
                hoverColor="#41506d"
            />
            <ListItem className="user__wrapper"
                style={ { color: '#fff' } }
                primaryText="Eric Hoffman"
                leftAvatar={<Avatar src="https://via.placeholder.com/64" className="user__avatar" />}
                rightIcon={<CommunicationChatBubble />}
                hoverColor="#41506d"
            />
            <ListItem className="user__wrapper"
                style={ { color: '#fff' } }
                primaryText="Grace Ng"
                leftAvatar={<Avatar src="https://via.placeholder.com/64" className="user__avatar" />}
                rightIcon={<CommunicationChatBubble />}
                hoverColor="#41506d"
            />
            <ListItem className="user__wrapper"
                style={ { color: '#fff' } }
                primaryText="Kerem Suer"
                leftAvatar={<Avatar src="https://via.placeholder.com/64" className="user__avatar" />}
                rightIcon={<CommunicationChatBubble />}
                hoverColor="#41506d"
            />
            <ListItem className="user__wrapper"
                style={ { color: '#fff' } }
                primaryText="Raquel Parrado"
                leftAvatar={<Avatar src="https://via.placeholder.com/64" className="user__avatar" />}
                rightIcon={<CommunicationChatBubble />}
                hoverColor="#41506d"
            />
        </List>
    )
};

/* export default (props) => {

    return (
        <div className="users__wrapper">
            <div className="user__wrapper">
                <img className="user__avatar" src="https://via.placeholder.com/64" alt="..."/>
                <div className="user__body">
                    <span className="user__name">User Name</span>
                    <span className="user__excerpt">Lorem ipsum dolor sit amet</span>
                </div>
                <div className="user__timing">
                    <span className="dotted"></span>
                    <span className="time">5 min</span>
                </div>
            </div>
            <div className="user__wrapper">
                <img className="user__avatar" src="https://via.placeholder.com/64" alt="..."/>
                <div className="user__body">
                    <span className="user__name">User Name</span>
                    <span className="user__excerpt">Lorem ipsum dolor sit amet</span>
                </div>
                <div className="user__timing">
                    <span className="dotted"></span>
                    <span className="time">5 min</span>
                </div>
            </div>
            <div className="user__wrapper">
                <img className="user__avatar" src="https://via.placeholder.com/64" alt="..."/>
                <div className="user__body">
                    <span className="user__name">User Name</span>
                    <span className="user__excerpt">Lorem ipsum dolor sit amet</span>
                </div>
                <div className="user__timing">
                    <span className="dotted"></span>
                    <span className="time">5 min</span>
                </div>
            </div>
            <div className="user__wrapper">
                <img className="user__avatar" src="https://via.placeholder.com/64" alt="..."/>
                <div className="user__body">
                    <span className="user__name">User Name</span>
                    <span className="user__excerpt">Lorem ipsum dolor sit amet</span>
                </div>
                <div className="user__timing">
                    <span className="dotted"></span>
                    <span className="time">5 min</span>
                </div>
            </div>
            <div className="user__wrapper">
                <img className="user__avatar" src="https://via.placeholder.com/64" alt="..."/>
                <div className="user__body">
                    <span className="user__name">User Name</span>
                    <span className="user__excerpt">Lorem ipsum dolor sit amet</span>
                </div>
                <div className="user__timing">
                    <span className="dotted"></span>
                    <span className="time">5 min</span>
                </div>
            </div>
        </div>
    )
}; */