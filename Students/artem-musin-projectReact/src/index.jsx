import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';

import FirstComp from './components/firstComponent/index.jsx';

let container = document.getElementById('app')

ReactDom.render(
    <FirstComp // whosaid={'Everyone'} whoanswer={'Me'} <<-- для пропсов
     />
    ,container)