//container
import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

import Message from '../Message/Message.jsx';
import { sendMessage } from '../../store/actions/messages_actions.js';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';

import './style.css';


class MessagesField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        // создадим ref в поле `textInput` для хранения DOM-элемента
       this.textInput = React.createRef();
    }

    handleSend = (text, sender) => {
        this.setState({text: ''});
        if (sender == 'Me') {
            this.sendMessage(text, sender)
        }
    }

    sendMessage = (text, sender) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        //вызов Action
        this.props.sendMessage(messageId, sender, text);
    }

    // Ставим фокус на <input> при монтировании компонента
    componentDidMount() {
        this.textInput.current.focus();
    }


    // componentDidUpdate() {
    //     if (this.state.messages.length%2 == 1 && this.state.lastUser !== 'Bot') {
    //         setTimeout(() => {
    //             this.setState({
    //                 messages: [
    //                     ...this.state.messages, {
    //                         text: 'Bot answer',
    //                         user: 'Bot'
    //                     }
    //                 ],
    //                 lastUser: 'Bot'
    //             });
    //         }, 1000);
    //     }
    // }

    render() {
        // let { user } = this.props;
        let { messages } = this.props;

        let msgArr = []
        
        Object.keys(messages).forEach(key => {
            msgArr.push (<Message 
                text={ messages[key].text } 
                sender={ messages[key].user } 
                key = { key }/>);
        });

        return (<div className="d-flex flex-column w-100">
                    <div className="mb-3">
                        { msgArr }
                    </div>
                    <form className="controls d-flex w-100" onSubmit={ (e) => { this.handleSend(this.state.text, 'Me');e.preventDefault() } } autoComplete="off">
                        <TextField 
                            name="input"
                            fullWidth={ true }
                            hintText="Введите сообщение"
                            className="w-80 textInput"
                            onChange={ (evt) => this.setState({ text: evt.target.value }) }
                            value={ this.state.text }
                            ref={ this.textInput }
                        />
                        <FloatingActionButton type="submit">
                            <SendIcon />
                        </FloatingActionButton>
                    </form>
                </div>)
    }
}

const mapStateToProps = ({ msgReducer }) => ({
    messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);