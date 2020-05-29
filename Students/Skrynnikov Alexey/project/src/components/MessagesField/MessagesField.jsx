import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../Message/Message.jsx';

import { sendMessage } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';


class MessagesField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    };

    handleSend = (text, sender) => {
        this.setState({text: ''});
        if(sender == 'Me' && text !== "") {
            this.sendMessage(text, sender);
        }
    };

    sendMessage = (text, sender) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;

        this.props.sendMessage(messageId, sender, text);
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) this.setState({ text: evt.target.value });
    };   

    render() {
        let { messages } = this.props;

        let msgArr = [];

        Object.keys(messages).forEach(key => {
            msgArr.push(<Message 
                text={ messages[key].text } 
                sender={ messages[key].user }
                key = { key }/>)
        });

        return (<div className="d-flex flex-column w-100">
                    <div>
                        { msgArr }
                    </div>
                    <hr/>
                    <div className="controls d-flex w-100">
                        <TextField
                        name="input"
                        fullWidth={ true }
                        hintText='Введите сообщение' 
                        type="text" 
                        className="w-75"
                        onChange={ this.handleChange }
                        onKeyUp={ this.handleChange }
                        value={ this.state.text }
                        />
                        <FloatingActionButton className="ml-4" onClick={ () => this.handleSend(this.state.text, 'Me') }>
                            <SendIcon />
                        </FloatingActionButton>  
                    </div>
                </div>    
                );
    };
}

const mapStateToprops = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToprops, mapDispatchToProps)(MessagesField);