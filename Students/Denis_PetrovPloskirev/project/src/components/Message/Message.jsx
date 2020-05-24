import React from 'react';
import './style.css';

export default (props) => {
  let { sender, text } = props;
  return (
    <div className="msg">
      <h3 className='authorMsg'>
        {sender && <strong>{sender}</strong>}
        {!sender && <strong>Bot</strong>}
      </h3>
        
      

      <p>{props.sender || (!props.sender && text) ? text : 'cyber answer...'}</p>
    </div>
  )
}