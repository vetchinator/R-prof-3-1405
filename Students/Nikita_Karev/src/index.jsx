import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';

// import TestComp from './components/TestComponent/index.jsx';
import HomeTask_1 from './components/HomeTask_1/index.jsx';

let container = document.getElementById('app')

// ReactDom.render(
//     <TestComp father={'Darth Vader'}/>
//     , container);
  
ReactDom.render(
    <HomeTask_1 />, 
    container);

