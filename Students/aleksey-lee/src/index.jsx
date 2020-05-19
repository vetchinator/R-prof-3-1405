import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';

import Father from './components/Father.jsx';

let container = document.getElementById('app')

let arr = ['Dart Vader', 'Chewbakka', 'Master Yoda']

ReactDom.render(
    <Father heroes={arr}/>
    , container);
