import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './layout/style/main.css';

import { Provider } from 'react-redux';
import initStore from './store/store.js';


import MessagesField from './components/MessagesField/MessagesField.jsx';

let container = document.getElementById('app');

let user = 'Loontik';

ReactDom.render(
    <MuiThemeProvider>
        <Provider store = { initStore() }>
            <div className="d-flex w-100 justify-content-center">
                <MessagesField user={ user } />
            </div>
        </Provider>
    </MuiThemeProvider>
    ,
    container
);




// let arr = ['Привет', 'Как дела?'];
// let button = document.getElementById('button');
// button.addEventListener('click', () => {
//     arr.push('Нормально');
//     ReactDom.render(
//         <Message arr = { arr } />
//     , container)
// })
// ReactDom.render(
//         <Message arr = { arr } />
//     , container);
