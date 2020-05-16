import React, {useState} from 'react'

import Messages from './Messages/index.jsx'

export default () => {
  const [messages, addMessage] = useState(['Привет', 'Как дела?']);

  return (
    <div>
      <Messages messages={messages}/>
      <button onClick={() => addMessage([...messages, 'Нормально)'])}>Добавить "Нормально"</button>
    </div>
  )
}