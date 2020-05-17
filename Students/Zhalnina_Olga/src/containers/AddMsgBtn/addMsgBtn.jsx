import React from 'react';
import ReactDom from 'react-dom';

import MessageList from '../../components/MessageList/messageList.jsx';

class AddMsgBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickOutsideHandler(event) {
    <MessageList msg="Нормально" />
  }

  render() {
    return (
      <button onClick={this.onClickOutsideHandler}>
        Add Message To List
      </button>
    )
  }
}

export default AddMsgBtn;