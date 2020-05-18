import React, {Component} from 'react'

import MessageField from './MessageField/index.jsx'
import SendMessage from './SendMessage/index.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        {
          author: 'bot',
          message: 'Hello!'
        },
        {
          author: 'bot',
          message: 'Send me message)'
        }
      ],
      inputValue: '',
      botMessageState: {
        botQueue: false,
        inProcess: false,
        messages: [
          'Hello', 'Im fine, thanks)', 'How do you do?', 'By'
        ]
      }
    }
  }

  onChange(e) {
    if (e.keyCode !== 13) {
      this.setState({
        inputValue: e.target.value
      })
    } else {
      this.onSend(e)
    }
  }

  onSend(e) {
    if (this.state.inputValue !== '') {
      e.preventDefault()
      this.setState((prevState) => ({
        messages: [...this.state.messages, {
          author: 'user',
          message: this.state.inputValue
        }],
        inputValue: '',
        botMessageState: {
          ...prevState.botMessageState,
          botQueue: true
        }
      }))
    }
  }

  componentDidUpdate() {
    const {botQueue, inProcess, messages} = this.state.botMessageState

    if (botQueue) {
      if (!inProcess) {
        this.setState(prevState => ({
          botMessageState: {
            ...prevState.botMessageState,
            botQueue: false,
            inProcess: true
          }
        }), () => {
          setTimeout(() => {
            this.setState(prevState => ({
              messages: [...prevState.messages, {
                author: 'bot',
                message:
                  messages[Math.floor(Math.random() * messages.length)]
              }],
              botMessageState: {
                ...prevState.botMessageState,
                inProcess: false
              }
            }))
          }, 1000)
        })
      }
    }
  }

  render() {
    return (
      <div>
        <MessageField messages={this.state.messages}/>
        <SendMessage onChange={this.onChange.bind(this)} onSend={this.onSend.bind(this)}
                     inputValue={this.state.inputValue}/>
      </div>
    )
  }
}