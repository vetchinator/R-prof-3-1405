import React from 'react';
import ReactDom from 'react-dom';
import Layout from './components/Layout/Layout.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import './layout/style/main.css';

let container = document.getElementById('app')

ReactDom.render(
    <Layout />,
    container
)