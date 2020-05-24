import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import { Provider } from 'react-redux';
import initStore from './store/store';

import Messenger from './components/MessageField/MessageField.jsx';

import '../layout/style/main.css';


let container = document.getElementById('app');

ReactDom.render(
    <Provider  store={ initStore() }>
        <Messenger />
    </Provider>
    , container)
