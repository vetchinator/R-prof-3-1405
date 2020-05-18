import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

export default (props) => {
  let { text } = props;
  return (
    <p className='message'>{text}</p>
  )
}