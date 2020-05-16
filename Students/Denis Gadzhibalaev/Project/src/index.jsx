import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import App from './components/App.jsx';

import './layout/style/main.sass';

ReactDom.render(<App />, document.getElementById('root')
    );