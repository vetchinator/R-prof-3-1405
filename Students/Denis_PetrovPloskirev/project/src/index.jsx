import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';

import Messenger from './components/Messenger/Messenger.jsx';

let container = document.getElementById('app');

ReactDom.render(
  <Messenger />,
  container);
