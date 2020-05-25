import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './layout/style/main.sass';


//components
import App from './components/App.jsx';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';


ReactDom.render(
    <Provider store = { initStore() }>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root') );