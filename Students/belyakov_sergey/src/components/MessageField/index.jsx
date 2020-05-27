import React from 'react'

import './style.css'

import Messages from '../Messages/index.jsx'
import SendMessage from "../SendMessage/index.jsx"

export default (props) => {
  const {onChange, onSend, inputValue, roomId} = props

  return (
    <div className="messages-field">
      <Messages roomId={roomId}/>
      <SendMessage
        roomId={roomId}
        onChange={onChange}
        onSend={onSend}
        inputValue={inputValue}
      />
    </div>
  )
}