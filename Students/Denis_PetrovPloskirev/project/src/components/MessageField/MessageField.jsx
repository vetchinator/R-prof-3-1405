import React, { Component } from 'react';

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
    };
  }

  handleSend = (text, sender) => {
    this.setState({ text: '' });
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

  handleChange = (evt) => {
    if (evt.keyCode !== 13) this.setState({ text: evt.target.value })
  }

  // componentDidUpdate(prevProps , prevState) {
  //   if (!this.state.messages[this.state.messages.length - 2].user && this.state.messages.length - prevState.messages.length == 1) {
  //     setTimeout(() => {
  //       this.setState({
  //         messages: [...this.state.messages, {
  //           user: null,
  //           text: 'Hello! I am Bot! And I can do this only'
  //         }]
  //       });
  //     }, 1000);
  //   }
  // }

  render() {
    let { messages } = this.props;
    let msgArr = [];
    Object.keys(messages).forEach(key => {
      msgArr.push(<Message
        text={messages[key].text}
        sender={messages[key].user}
        key={key} />);
    });

    return (<div className="d-flex w-100 wrapper">
      <div className="chatList">
        <div className="chatListItem chatListItemActive">
          React 14/05/2020
                  </div>
        <div className="chatListItem">
          John Dow
                  </div>
        <div className="chatListItem">
          Bill Gates
                  </div>
        <div className="chatListItem">
          Steve Jobs
                  </div>
        <div className="chatListItem">
          Pavel Durov
                  </div>
      </div>
      <div className="chatWindow d-flex flex-column">
        <h1 className="chatName">React 14/05/2020</h1>
        <div className="msgList">
          {msgArr}
        </div>
        <div className="inputBlock" style={{ width: '100%', display: 'flex' }}>
          <TextField
            fullWidth={true}
            hintText="Введите сообщение"
            style={{ fontSize: '18px' }}
            onChange={this.handleChange}
            onKeyUp={this.handleChange}
            value={this.state.text}
            underlineFocusStyle={{ borderColor: 'darkgoldenrod' }}
          />
          <FloatingActionButton backgroundColor='darkgoldenrod' onClick={() => this.handleSend(this.state.text, 'Me')}>
            <SendIcon />
          </FloatingActionButton>
        </div>
      </div>
    </div>)
  }
}

const mapStateToProps = ({ msgReducer }) => ({
  messages: msgReducer.messages
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessagesField);