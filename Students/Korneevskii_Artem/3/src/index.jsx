import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

import { Provider } from 'react-redux';
import initStore from './store/store.js';

import Layout from './components/Layout/index.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let mainContainer = document.getElementById('app');
let user = 'Vader';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store = { initStore() }>    
            <Layout user={ user } />
        </Provider>   
    </MuiThemeProvider> 
    , mainContainer
);