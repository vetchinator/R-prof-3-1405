import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/style/main.css';

// redux

import { Provider } from 'react-redux'
import initStore from './store/store.js'


// components

import Layout from './components/Layout/Layout.jsx';
import Header from './components/Header/Header.jsx';
import MessagesField from './components/MessageField/MessageField.jsx';
import ChatList from './components/ChatList/ChatList.jsx';

let container = document.getElementById('app')

let user = 'Me';

ReactDom.render(
        <Layout>
        </Layout>
        ,container)