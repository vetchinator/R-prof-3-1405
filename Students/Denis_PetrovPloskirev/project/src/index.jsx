import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js';

import MessagesField from './components/MessageField/MessageField.jsx';

let container = document.getElementById('app');
let user = 'Loontik';


ReactDom.render(
  <MuiThemeProvider>
    <Provider store=  { initStore() }>
        <MessagesField user={user} />
    </Provider>
  </MuiThemeProvider>,
  container
)