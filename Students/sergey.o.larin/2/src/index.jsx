import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import Messenger from './components/MessageField/MessageField.jsx';


let container = document.getElementById('app');

let user = 'Ext';

ReactDom.render(
    <Messenger user={ user } />
    , container)