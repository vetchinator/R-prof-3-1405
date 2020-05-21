//container
import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import Message from '../Message/Message.jsx';

export default class MessagesField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            messages: [
                {
                    user: 'Loontik',
                    text: 'Hi'
                },
                {
                    user: null,
                    text: 'Hello'
                },
                {
                    user: 'Loontik',
                    text: 'How are you?'
                },
                {
                    user: null,
                    text: 'Fine'
                },
            ],
            lastUser: false
        }
    }

    handleSend = (evt) => {
        evt.preventDefault()
        this.setState({
            text: '',
            messages: [...this.state.messages, { 
                user: this.props.user, 
                text: this.state.text
            }],
            lastUser: this.props.user
        });
    }

    handleChange = (evt) => {
        this.setState({ text: evt.target.value })
    }

    componentDidUpdate() {
        if (this.state.messages.length%2 == 1 && this.state.lastUser !== 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: [
                        ...this.state.messages, {
                            text: 'Bot answer',
                            user: 'Bot'
                        }
                    ],
                    lastUser: 'Bot'
                });
            }, 1000);
        }
    }

    render() {
        // let { user } = this.props;
        let { messages } = this.state;

        let msgArr = messages.map((msg, i) => {
            return (<Message text={ msg.text } sender={ msg.user } key={i} />);
        });

        return (<div className="d-flex flex-column w-50">
                    <div>
                        { msgArr }
                    </div>
                    <hr/>
                    <form className="controls d-flex w-100" onSubmit={ this.handleSend }>
                        <input 
                            type="text" 
                            className="w-75"
                            onChange={ this.handleChange }
                            value={ this.state.text }
                        />
                        <button className="ml-3">Send</button>
                    </form>
                </div>)
    }
}