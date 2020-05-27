import React from 'react'
import ReactDom from 'react-dom'

import {Provider} from 'react-redux'
import initStore from './store/store.js'

import CssBaseline from '@material-ui/core/CssBaseline';

import './layout/style/main.css'

import {BrowserRouter} from 'react-router-dom'
import Router from './router.jsx'

ReactDom.render(
  <BrowserRouter>
    <Provider store={initStore()}>
      <CssBaseline>
        <Router/>
      </CssBaseline>
    </Provider>
  </BrowserRouter>
  ,
  document.querySelector('#app')
)