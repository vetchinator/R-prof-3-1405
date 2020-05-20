import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';
import AddMsgBtn from './containers/AddMsgBtn/addMsgBtn.jsx'

let container = document.getElementById('app')

ReactDom.render(
    <AddMsgBtn/>
    , container);