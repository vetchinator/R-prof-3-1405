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
    inputValue: '',
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
        inputValue: inputValue
      }))
    } else {
      this.onSend(this.state.inputValue, 'user')
    }
  }

  onSend(message, author) {
    if (this.state.inputValue !== '') {
      this.sendMessage(message, author)

      this.setState((prevState) => ({
        ...prevState,
        inputValue: '',
        botMessageState: {
          ...prevState.botMessageState,
          botQueue: true
        }
      }))
    }
    setTimeout(() => this.onScroll())

  }

  sendMessage(message, author) {
    const {messages} = this.props
    const messageId = Object.keys(messages).length + 1

    const roomID = 1

    this.props.sendMessage(messageId, message, author, roomID)
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
          roomId={this.props.roomId}
        />
        <div className="wrapper">
          <ChatList roomId={this.props.roomId}/>
          <MessageField
            messages={this.state.messages}
            onChange={this.onChange.bind(this)}
            onSend={() => this.onSend(this.state.inputValue, 'user')}
            inputValue={this.state.inputValue}
          />
        </div>
      </Container>
    )
  }
}

const mapStateToProps = ({msgReducer}) => ({
  messages: msgReducer.messages
})

const mapDispatchToProps = (dispatch) => bindActionCreators({sendMessage}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
