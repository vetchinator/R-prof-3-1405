import React from 'react'
import ReactDom from 'react-dom'

import 'bootstrap'
import './layout/style/main.css'

import App from './components/App.jsx'

ReactDom.render(
  <App />, document.querySelector('#app')
)