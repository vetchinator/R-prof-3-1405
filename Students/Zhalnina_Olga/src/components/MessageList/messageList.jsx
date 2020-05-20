import React from 'react';
import ReactDom from 'react-dom';

function MessageList(props) {
  let { msg } = props;
  return (
    <p>{ msg }</p>
  )
}

export default MessageList;