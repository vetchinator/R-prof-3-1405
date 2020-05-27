import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import './style.css';

import Message from '../Message/Message.jsx';

import { sendMessage } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class MessagesField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            text: '',
            botBusy: false,
            userSaid: true
        }
    }

    static propTypes = {
        chatId: PropTypes.number,
        userName: PropTypes.string
    }
    static defaultProps = {
        chatId: 0
    }

    handleSend = (sender, text) => {
        this.setState({ text: '' });
        if (sender == this.state.user) {
            this.sendMessage(sender, text)
        }
    }

    handleChange = (evt) => {
        evt.keyCode !== 13 ? this.setState({ text: evt.target.value }) : this.handleSend(this.state.user, this.state.text);
    }

    sendMessage = (sender, text) => {
        let { messages } =this.props;
        let messageId = Object.keys(messages).length + 1;

        // вызов Action
        this.props.sendMessage(messageId, sender, text);
    }

    /* componentDidUpdate(prevProps, prevState) {

        let thisArrLen = this.state.messages.length;
        let prevArrLen = prevState.messages.length;

        if ((thisArrLen > prevArrLen) && prevState.text && this.state.botBusy === false) {
         
            this.state.botBusy = true; // Состояние бота Занят
                        
            setTimeout(() => {
                this.setState(
                    {
                        messages: [ ...this.state.messages, {user: 'Bot', text: 'Бот сказал...'} ],
                        userSaid: false,
                        botBusy: false // состояние бота Свободен
                    }
                )
              
            }, 1000);

        } else if ((thisArrLen > prevArrLen) && this.state.userSaid === true && !prevState.text && this.state.botBusy === false) {

            this.state.botBusy = true; // Состояние бота Занят
                        
            setTimeout(() => {
                this.setState(
                    {
                        messages: [ ...this.state.messages, {user: 'Bot', text: 'Чтобы я смог ответить, отправьте текст...'} ],
                        userSaid: false,
                        botBusy: false // состояние бота Свободен
                    }
                )
              
            }, 1000);
        }

        this.state.userSaid = true;

    } */

    render() {
        let { messages } = this.props;

        let msgArr = [];

        Object.keys(messages).forEach(key => {
           msgArr.push(<Message 
                key={ key }
                text={ messages[key].text }
                sender={ messages[key].user } />);
        });

        return (
            <div className="messages__layout">
                <div className="messages__wrapper">
                    { msgArr }
                </div>
                <div className="controls">
                    <div style={ { width: '100%', display: 'flex' } }>
                        <TextField
                            name="input"
                            fullWidth={ true }
                            hintText="Введите сообщение"
                            underlineFocusStyle={ { borderColor: '#41506d' } }
                            style={ { fontSize: '22px' } }
                            onChange={ this.handleChange }
                            onKeyUp={ this.handleChange }
                            value={ this.state.text }
                        />
                        <FloatingActionButton
                            backgroundColor="#41506d"
                            onClick={ () => this.handleSend(this.state.user, this.state.text) }>
                            <SendIcon />
                        </FloatingActionButton>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);