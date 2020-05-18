import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';

import App from './components/TestComponent/message.jsx';
import msgArr from './components/TestComponent/index.jsx';

const container = document.getElementById('app');



ReactDom.render(
<App/> 
,container);