import React from 'react'

import './style.css'

export default () => {
  return (
    <div className="chat-list">
      <h2>Комнаты:</h2>
      <ul>
        <li>Чат 1</li>
        <li>Чат 2</li>
        <li className="active">Чат 3</li>
        <li>Чат 4</li>
      </ul>
    </div>
  )
}