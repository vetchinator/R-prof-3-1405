import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
import './layout/style/main.css';

import SendMsg from '../src/components/Button/Button.jsx';

let container = document.getElementById('app');

ReactDom.render(<SendMsg />, container);