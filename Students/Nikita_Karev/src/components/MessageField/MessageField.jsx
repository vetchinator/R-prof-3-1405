// container
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css';

//material-ui
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
    }

    handleSend = (text, sender) => {
        this.setState({ text: ''});
        if (sender == 'John Carmack') {
            this.sendMessage(text, sender);
        }
    }

    sendMessage = (text, sender) => {
        let { messages } = this.props;
        let messageId = Object.keys(messages).length + 1;
        //вызов Action
        this.props.sendMessage(messageId, sender, text);
    }

    handleChange = (evt) => {
        // if (evt.keyCode !== 13) this.setState({ text: evt.target.value })
        evt.keyCode !== 13 ?
            this.setState({ text: evt.target.value }) :
            this.handleSend(evt);
    }

    // componentDidUpdate() {
    //     let messages_ = this.state.messages
    //     if (messages_.length % 2 === 1) {
    //         setTimeout (() => {
    //             this.setState ({
    //                 messages: [...this.state.messages, {
    //                     user: 'Bot',
    //                     text: 'Auto-answer'}]
    //             });
    //         }, 1000)
    //     }
    // }

    render() {
        //let { user } = this.props;
        let { messages } = this.props;

        let msgArr = []
        
        Object.keys(messages).forEach(key => {
            msgArr.push (<Message
                text={ messages[key].text }
                sender={ messages[key].user }
                key={ key } />);
        });

        return (
            <div className="d-flex w-100 wrapper">
                
                <div>
                    <div className="dialog-list">
                        <div className="dialog-list-item">Mick Gordon</div>
                        <div className="dialog-list-item dialog-list-item-active">John Carmack</div>
                        <div className="dialog-list-item">David Falkner</div>
                        <div className="dialog-list-item">Cliff Bleszinski</div>
                        <div className="dialog-list-item">John Romero</div>
                        <div className="dialog-list-item">John Romero</div>
                        <div className="dialog-list-item">John Romero</div>
                        <div className="dialog-list-item">John Romero</div>
                        <div className="dialog-list-item">John Romero</div>
                        <div className="dialog-list-item">John Romero</div>
                        <div className="dialog-list-item">John Romero</div>
                        <div className="dialog-list-item">John Romero</div>
                    </div>
                </div>
                
                <div className="d-flex flex-column dialog-window">
                    <span className="dialog-name mb-1">John Carmack | Last seen - 24/05/2020</span>
                    <div className="message-field">
                        { msgArr }
                    </div>
                    <div className="d-flex justify-content-center controls w-100 mt-2">
                        {/* <TextField
                            name="input"
                            fullWidth={ true }
                            hintText="Введите сообщение"
                            style={ { fontSize: '22px' } }
                            onChange={ this.handleChange }
                            onKeyUp={ this.handleChange }
                            value={ this.state.text }
                        /> 
                        <FloatingActionButton 
                            onClick={ () => this.handleSend(this.state.text, 'John Snow') }>
                            <SendIcon />
                        </FloatingActionButton> */}
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField
                                    name="input" 
                                    id="input-with-icon-grid" 
                                    label="With a grid"
                                    hintText="Введите сообщение"
                                    style={ { fontSize: '22px', width: '777px' } }
                                    onChange={ this.handleChange }
                                    onKeyUp={ this.handleChange }
                                    value={ this.state.text } />
                            </Grid>
                        </Grid>
                        <Button
                            onClick={ () => this.handleSend(this.state.text, 'John Carmack') }
                            style= {{ outline: 'none', backgroundColor: '#00bcd4', borderRadius: '20px' }}
                            variant="contained"
                            color="primary"
                            >
                            <SendIcon />
                        </Button>
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