import React from 'react'
import ReactDom from 'react-dom'

import CssBaseline from '@material-ui/core/CssBaseline';

import './layout/style/main.css'

import App from './components/App.jsx'

ReactDom.render(
  <CssBaseline>
    <App/>
  </CssBaseline>,
  document.querySelector('#app')
)