import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './style.css';

import Message from '../Message/Message.jsx';
import Input from '../Input/Input.jsx';
import Button from '../SendButton/SendButton.jsx';


class Messenger extends Component {
  state = {
    messages: ['Hello', 'How are you?', 'Thank, fine']
  }

  render() {
    let msgArr = this.state.messages.map(phrase => {
      return (<Message text={phrase} />);
    });
    return (
      <div>
        {msgArr}
        <hr />
        <Input />
        <Button handler={this.handle.bind(this)} />
      </div>
    )
  }

  handle() {
    this.state.messages.push(document.getElementById('inputMessage').value);
    document.getElementById('inputMessage').value = '';
    ReactDom.render(
      <Messenger />,
      document.getElementById('app')
    );
  }
}

export default Messenger;