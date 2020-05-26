import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';

import Layout from './layout/Layout.jsx';

let container = document.getElementById('app')

let user = 'Loontik';


ReactDom.render(
    <Provider store = { initStore() }>
        <MuiThemeProvider>
            <Layout user={ user } />
        </MuiThemeProvider>
    </Provider>
    ,
    container
)

