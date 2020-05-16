import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';

import HomeTask_1 from './components/HomeTask_1/index.jsx';

let container = document.getElementById('app')
  
ReactDom.render(
    <HomeTask_1 />, 
    container);

