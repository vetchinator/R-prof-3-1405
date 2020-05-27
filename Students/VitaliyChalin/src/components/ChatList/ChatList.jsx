import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Chat from '../ChatItem/Chat.jsx';

import { List } from 'material-ui/List';
import { TextField } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import './style.css';

const chats = {
    1: {title: 'Brendan Lim', messageList: [1, 3, 10]},
    2: {title: 'Eric Hoffman', messageList: [2, 4, 5]},
    3: {title: 'Чат 3', messageList: []}
};

const styles = {
    inputField: {
        color: '#fff',
        fontSize: '1rem'
    },
    placeholder: {
        color: '#757575',
        fontWeight: '400'
    }
};

export default class ChatList extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        userName: PropTypes.string
    };
    static defaultProps = {
        chatId: 0
    };

    render() {        
        
        let chatsArr = [];

        Object.keys(chats).forEach(key => {
            chatsArr.push(<Chat 
                key={ key }
                chatId={ key }
                userName={ chats[key].title }
                messageList={ chats[key].messageList } />);
        });
                
        return (
            <div className="users__wrapper">
                <List className="users__list" >
                    { chatsArr }
                </List>
                <div className="users__control">
                    <TextField
                        className="user__input"
                        name="input"
                        fullWidth={ true }
                        hintText="Введите имя пользователя"
                        hintStyle={ styles.placeholder }
                        underlineFocusStyle={ { borderColor: '#41506d' } }
                        inputStyle={ styles.inputField }
                        /* onChange={ this.handleChange }
                        onKeyUp={ this.handleChange }
                        value={ this.state.text } */
                    />
                    <FlatButton
                        className="user__add"
                        label="Add Chat"
                        fullWidth={ true }
                        backgroundColor="#41506d"
                        hoverColor="#78a1fe"
                    />
                </div>
            </div>
        )
    }
}
