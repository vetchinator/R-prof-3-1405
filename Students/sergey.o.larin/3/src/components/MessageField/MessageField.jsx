import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { sendMessage } from '../../store/action/messages.js';

import { IconButton, TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import Typography from "@material-ui/core/Typography";

import Message from '../Message/Message.jsx';
import User from '../User/User.jsx';


const useStyles = theme => ({
    users: {
        backgroundColor: '#eeeeee',
        margin: '5px',
        borderRadius: '5px',
        height: 'max-content',
    },
    messages: {
        width: '100%',
        wordBreak: 'break-all',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 0 70px 0',
    },
    inputDiv: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    inputRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '10px 5px 5px 5px',
    }
});

class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waitBot: false,
            inputValue: '',
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let {messages} = this.props;
        /*if (this.props.messages[Object.keys(messages).length].user != null && !this.state.waitBot) {     // TODO 1 ответ на все сообщения в течении таймаута
            this.setState({waitBot: true});
            setTimeout(() => {
                this.sndMessage(null, 'Please wait...');
                this.setState({ waitBot: false });
            }, 1000);
        }*/
        if (this.props.messages[Object.keys(messages).length].user != null &&
            Object.keys(prevProps.messages).length !== Object.keys(messages).length) {      // на каждое сообщение - ответ бота
            setTimeout(() => {
                this.sndMessage(null, 'Please wait...');
            }, 1000);
        }
        window.scrollTo({ top: 999999, behavior: "smooth"});

    }

    inputText(value) {
        this.setState({inputValue: value})
    }

    sndMessage(user, inputValue) {
        let {messages} = this.props;
        let messageId = Object.keys(messages).length + 1;
        if (user === this.props.user) {
            this.props.sendMessage(messageId, user, inputValue);
            this.setState({inputValue: ''});
            document.getElementById('input-message').value = '';
        } else {
            this.props.sendMessage(messageId, user, inputValue);
        }
    }

    render() {
        const classes = useStyles();
        let {messages, users} = this.props;
        let msgArr = [];
        Object.keys(this.props.messages).forEach(key => {
            msgArr.push(<Message
                key={key}
                sender={messages[key].user}
                text={messages[key].text}/>);
        });
        let userArr = users.map((user, i) => {
            return (<User key={i} user={user}/>);
        });
        return (
            <div style={{display: "flex", flexDirection: "column", height: '100%'}}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={classes.users}>
                    <Typography style={{ textAlign: 'center' }}>Участники</Typography>
                    <div id='users'>
                        {userArr}
                    </div>
                </div>
                <div style={classes.messages} id='messages'>
                    {msgArr}
                </div>
        </div>
                <div
                    style={classes.inputDiv}
                    id='input_row'>
                    <div style={classes.inputRow}>
                        <TextField
                            id="input-message"
                            variant="outlined"
                            label="Введите сообщение"
                            size="small"
                            fullWidth
                            onKeyUp={(event) => this.state.inputValue && event.keyCode === 13 ? this.sndMessage(this.props.user, this.state.inputValue) : null}
                            onChange={(event) => this.inputText(event.target.value)}
                        />
                        <IconButton
                            disabled={!this.state.inputValue}
                            id="sendButton"
                            onClick={() => this.sndMessage(this.props.user, this.state.inputValue)}>
                            <Send/>
                        </IconButton>
                    </div>
                </div>
            </div>)
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages,
    user: msgReducer.user,
    users: msgReducer.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
