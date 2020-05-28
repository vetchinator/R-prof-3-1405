import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from '@material-ui/';

import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';

//components
import Layout from './components/Layout/Layout.jsx';

let container = document.getElementById('app')

let user = 'Loontik';

ReactDom.render(
    <Provider store = { initStore() }>
        <div className = "d-flex w-100 justify-content-center">
            <Layout user={ user } />
        </div>
    </Provider>
    ,
    container
)

