import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';
import TestComp from './components/TestComponent/index.jsx'

ReactDom.render (
    <TestComp msg={'Номальна!'}/>,
 document.getElementById('app'))