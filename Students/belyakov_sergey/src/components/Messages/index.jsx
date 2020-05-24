import React from 'react'

import './style.css'

import Message from '../Message/index.jsx'

export default (props) => {
  const {messages} = props

  return (
    <div className="messages">
      {
        messages.map((message, index) => (
          <Message author={message.author} message={message.message} key={index}/>
        ))
      }
    </div>
  )
}