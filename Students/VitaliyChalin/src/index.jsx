import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js';

import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';

// components
//import ChatList from './components/ChatList/ChatList.jsx';
import Layout from './components/Layout/Layout.jsx';

let container = document.getElementById('app');

let user = 'Loontik';

ReactDom.render(
    <Provider store={ initStore() }>
        <MuiThemeProvider>
            <Layout user={ user } />
        </MuiThemeProvider>
    </Provider>,
    container
);