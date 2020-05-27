import React from 'react';
import ReactDom from 'react-dom';
/* import 'bootstrap'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js';

import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';

// components
import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

let container = document.getElementById('app');

ReactDom.render(
    <BrowserRouter>
        <Provider store={ initStore() }>
            <MuiThemeProvider>
                <Router />
            </MuiThemeProvider>
        </Provider>
    </BrowserRouter>,
    container
);