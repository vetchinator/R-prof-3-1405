import React from 'react'
import ReactDOM from 'react-dom'

import ChatList from '../ChatList/ChatList.jsx'

export default class ChatField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chats: [
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
                user: 'Kuzya',
                text: 'Fine'
            }
        ], text: '' };
    }

    render() {
        console.log('отладка')
        const ChatField = this.state.chats.map(el => {
            return (
                <ChatList user = {el.user} text = {el.text}/>
            )
        })
        return (
            <div className="d-flex flex-column w-50">
            {ChatField }
                <div className="controls d-flex w-100">
                    <input
                        type="text" 
                        className="w-75"
                        id="new-msg"
                        onChange={this.handleChange}
                        onKeyUp = {this.handleChange}
                        value={this.state.text}
                    />
                    <button type="button" className="btn btn-primary" onClick={ this.handleClick }>send</button>
                </div>
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.chats)
        if (prevState.chats[prevState.chats.length-1].user !== 'Bot') {
            setTimeout(() => {
                console.log(`Bot answers`)
                this.setState({
                    chats: [...this.state.chats,
                    {
                        user: `Bot`,
                        text: `I am bot`
                    }]
                })
            }, 3000);
        }
    }

    handleChange = (e) => {
        e.keyCode !== 13 ?
        this.setState({ text: e.target.value }) : 
        this.handleClick (e)
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            user: null,
            text: this.state.text
        };
        this.setState(state => ({
            chats: state.chats.concat(newItem),
            text: ''
        }));
    }

    /*componentDidUpdate() {
        setTimeout(() => {
            console.log(`Bot answers`)
            this.setState(state => ({
                chats: state.chats.concat(['Не приставай ко мне, я робот!'])
            }))
        }, 1000);
    }*/
}