import React from 'react';

import './style.css';

export default (props) => {
  return (<li className="mb-2"><a href="#">{props.label}</a></li>)
}