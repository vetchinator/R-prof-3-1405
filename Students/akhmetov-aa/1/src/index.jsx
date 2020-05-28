import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
// import Content from "./components/TestComponent/index.jsx";
import Button from "./components/Button/index.jsx";
import Message from "./components/Message/index.jsx"

import './layout/style/main.css';

let app = document.getElementById('app');

// ReactDom.render(<Content names={['First', 'Second', 'Third']}/>, app);


ReactDom.render(
    <Button/>, app);
