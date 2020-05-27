import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import connect from 'react-redux/es/connect/connect'

import {sendMessage} from '../store/actions/message-actions'

import MessageField from './MessageField/index.jsx'
import Header from './Header/index.jsx'
import ChatList from './ChatList/index.jsx'

import {Container} from "@material-ui/core"

class App extends Component {
  static propTypes = {
    roomId: PropTypes.number
  }

  static defaultProps = {
    roomId: 1
  }

  state = {
    inputValueMessage: '',
    botMessageState: {
      botQueue: false,
      inProcess: false,
      messages: [
        'Hello', 'Im fine, thanks)', 'How do you do?', 'By'
      ]
    }
  }

  onScroll() {
    const mess = document.querySelector('.messages');
    mess.scrollTop = mess.scrollHeight;
  }

  onChange(e) {
    if (e.key !== "Enter") {
      const inputValue = e.target.value
      this.setState((prevState) => ({
        ...prevState,
        inputValueMessage: inputValue
      }))
    } else {
      this.onSend(this.state.inputValueMessage, 'user')
    }
  }

  onSend(message, author) {
    if (this.state.inputValueMessage !== '') {
      this.sendMessage(message, author)

      this.setState((prevState) => ({
        ...prevState,
        inputValueMessage: '',
        botMessageState: {
          ...prevState.botMessageState,
          botQueue: true
        }
      }))
    }
    setTimeout(() => this.onScroll())

  }

  sendMessage(message, author) {
    const {messages, roomId, sendMessage} = this.props
    const messageId = Object.keys(messages).length + 1
    sendMessage(messageId, message, author, roomId)
  }

  botSendMessage() {
    const {messages} = this.state.botMessageState

    this.sendMessage(
      messages[Math.floor(Math.random() * messages.length)],
      'bot'
    )

    this.setState((prevState) => ({
      ...prevState,
      botMessageState: {
        ...prevState.botMessageState,
        inProcess: false
      }
    }))
    this.onScroll();
  }

  showChatList() {
    const chatList = document.querySelector('.chat-list');
    const messageField = document.querySelector('.messages-field')
    const menuIconOpen = document.querySelector('.menu-icon__open')
    const menuIconClose = document.querySelector('.menu-icon__close')

    chatList.classList.toggle('show')
    messageField.classList.toggle('hidden')
    menuIconOpen.classList.toggle('hidden')
    menuIconClose.classList.toggle('hidden')
  }

  componentDidUpdate(prevProps, prevState) {
    const {botQueue} = this.state.botMessageState
    const {inProcess} = prevState.botMessageState

    if (botQueue) {
      if (!inProcess) {
        this.setState((prevState) => ({
          botMessageState: {
            ...prevState.botMessageState,
            botQueue: false,
            inProcess: true
          }
        }))
        setTimeout(() => this.botSendMessage(), 1000)
      }
    }
  }

  render() {
    return (
      <Container
        maxWidth="lg"
        disableGutters={true}
      >
        <Header
          showChatList={this.showChatList}
          roomId={this.props.roomId}
        />
        <div className="wrapper">
          <ChatList
            showChatList={this.showChatList}
            rooms={this.props.rooms}
            roomId={this.props.roomId}/>
          <MessageField
            roomId={this.props.roomId}
            onChange={this.onChange.bind(this)}
            onSend={() => this.onSend(this.state.inputValueMessage, 'user')}
            inputValue={this.state.inputValueMessage}
          />
        </div>
      </Container>
    )
  }
}

const mapStateToProps = ({msgReducer, roomReducer}) => ({
  messages: msgReducer.messages,
  rooms: roomReducer.rooms
})

const mapDispatchToProps = (dispatch) => bindActionCreators({sendMessage}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
