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
      const inputValue = e.target.value
      this.setState((prevState) => ({
        ...prevState,
        inputValue: inputValue
      }))
    } else {
      this.onSend(e)
    }
  }

  onSend(e) {
    if (this.state.inputValue !== '') {
      e.preventDefault()
      this.setState((prevState) => ({
        messages: [...prevState.messages, {
          author: 'user',
          message: prevState.inputValue
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
        console.log(this.state)
        this.setState((prevState) => ({
          botMessageState: {
            ...prevState.botMessageState,
            botQueue: false,
            inProcess: true
          }
        }))

        setTimeout(() => {
          this.setState((prevState) => ({
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
          console.log(this.state)
        }, 2000)

      }
    }

  }

  render() {
    return (
      <div>
        <MessageField messages={this.state.messages}/>
        <SendMessage
          onChange={this.onChange.bind(this)}
          onSend={this.onSend.bind(this)}
          inputValue={this.state.inputValue}
        />
      </div>
    )
  }
}