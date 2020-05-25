import React from 'react';
import ReactDom from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';

//redux
import { Provider } from 'react-redux';
import initStore from './store/store.js'; //хранилище

//components
import MessageField from './components/MessageField/MessageField.jsx'

let container = document.getElementById('app')
let user = 'Luntik'
const theme = createMuiTheme({})

ReactDom.render (
    <MuiThemeProvider theme={theme}>
        <Provider store={ initStore ()}>
            <div className="d-flex w-100 justify-content-center">
                <MessageField user={ user }/>
            </div>
        </Provider>
    </MuiThemeProvider>
    ,
 container)