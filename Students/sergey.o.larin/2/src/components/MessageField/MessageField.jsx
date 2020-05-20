import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {withStyles} from '@material-ui/core/styles';
import {IconButton, TextField} from '@material-ui/core';
import {Send} from '@material-ui/icons';

import Message from '../Message/Message.jsx';


const useStyles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '10px 5px 5px 5px',
    },
});

class MessengerField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waitBot: false,
            inputValue: '',
            messages: [
                {
                    user: 'Ext',
                    text: 'Привет'
                },
                {
                    user: null,
                    text: `Привет ${this.props.user}!`
                },
                {
                    user: null,
                    text: 'Как твои дела?'
                }
            ],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        /*if (prevState.messages[prevState.messages.length - 1].user !== null && !this.state.waitBot) {     // TODO 1 ответ на все сообщения в течении таймаута
            this.setState({waitBot: true});
            setTimeout(() => {
                this.sendMessage(null, 'Please wait...');
                this.setState({waitBot: false});
            }, 1000);
        }*/
        if (prevState.messages[prevState.messages.length - 1].user !== null && this.state.inputValue === '') {      // на каждое сообщение - ответ бота
            setTimeout(() => {
                this.sendMessage(null, 'Please wait...');
            }, 1000);
        }
    }

    inputText(value) {
        this.setState({inputValue: value})
    }

    sendMessage(user, inputText) {
        const newArrMsg = this.state.messages;
        let message =
            {
                user: user,
                text: inputText
            };
        newArrMsg.push(message);      // Добавляем в массив новое сообщение
        if (user === this.props.user) {
            this.setState({
                messages: newArrMsg,
                inputValue: '',
            });
            document.getElementById('input-message').value = '';
        } else {
            this.setState({
                messages: newArrMsg,
            });
        }
    }

    render() {
        const classes = useStyles();
        let messages = this.state.messages;
        let msgArr = messages.map((msg, i) => {
            return (<Message key={i} sender={msg.user} text={msg.text}/>);
        });

        return (<div>
            {msgArr}
            <div style={classes.root}>
                <TextField
                    id="input-message"
                    variant="outlined"
                    label="Введите сообщение"
                    size="small"
                    fullWidth
                    onKeyUp={(event) => this.state.inputValue && event.keyCode === 13 ? this.sendMessage(this.props.user, this.state.inputValue) : null}
                    onChange={(event) => this.inputText(event.target.value)}
                />
                <IconButton
                    disabled={!this.state.inputValue}
                    id="sendButton"
                    onClick={() => this.sendMessage(this.props.user, this.state.inputValue)}>
                    <Send />
                </IconButton>
            </div>
        </div>)
    }
}

export default withStyles(useStyles)(MessengerField)