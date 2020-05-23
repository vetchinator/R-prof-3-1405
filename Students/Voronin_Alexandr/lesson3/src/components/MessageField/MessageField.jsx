import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { TextField, Fab } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import './style.css';
import Message from '../Message/Message.jsx';

import { sendMessage } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

class MessageField extends Component {
    constructor (props) {
        super (props)
        this.state = {
            //botResponse: false,
            text: '',
            
        }
    }

    handleSend = (text, sender) => {
        this.setState({text: ''})
        if (sender == 'Me') {
            this.sendMessage(text, sender)
        }
    }

    sendMessage = (text, sender) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        //вызов Action
        this.props.sendMessage(messageId, sender, text)
    }

    //handleChange = (evt) => {
    //    if (evt.keyCode !== 13) this.setState({ text: evt.target.value })
    //}

    handleChange = (evt) => {
        evt.keyCode !== 13 ?
            this.setState({ text: evt.target.value }) :
            this.handleSend(evt)
    }


    //componentDidUpdate(prevProps, prevState) {
    //    if ((this.state.messages.length > prevState.messages.length) && 
    //    (this.state.messages[this.state.messages.length - 1].user != prevState.messages[prevState.messages.length - 1].user)&&
    //    this.state.botResponse === false)
    //    {
    //        setTimeout(() => {
    //            this.setState({
    //                botResponse: true,
    //                text: '',
    //                messages: [...this.state.messages, {
    //                    user: null,
    //                    text: '' 
    //                }]
    //            })
    //        }, 1000);
    //    }
    //    
    //}

    render () {
        let { messages } = this.props;

        let msgArr = []
        Object.keys(messages).forEach(key => {
            msgArr.push (<Message
                text={ messages[key].text } 
                sender={ messages[key].user }
                key={ key }/>);
        });

//layout - "d-flex flex-column w-50">
//before input - controls d-flex w-100
        return (
            <div className="layout"> 
                <div className="message-field">
                    { msgArr }
                </div>
                <div className="inputMsg">
                    <TextField id="standart-basic"
                        fullWidth={ true }
                        onChange={ this.handleChange }
                        onKeyUp={ this.handleChange }
                        value={ this.state.text }
                    />
                    <Fab size="small" color="primary"
                    onClick={ () => this.handleSend(this.state.text, 'Me') }>
                        <SendIcon/>
                    </Fab>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
})

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);