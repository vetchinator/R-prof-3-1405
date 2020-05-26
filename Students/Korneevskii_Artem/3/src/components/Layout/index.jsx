import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Header from '../Header/index.jsx';
import MessageField from '../MessageField/index.jsx';
import ChatList from '../ChatList/index.jsx';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { user } = this.props;

        return (
            <div className="d-flex w-100 justify-content-center messenger-layout mt-4 mb-4">
                <div className="d-flex flex-column w-50 messenger-wrapper">
                    <Header />
                    <div className="d-flex">
                        <ChatList />                    
                        <MessageField user={ user } />                                     
                    </div>
                </div>
            </div>
        );
    }
}

//вариант через стрелочные функции
/*let Layout = (props) => {

    let { user } = props;

    return (
        <div className="d-flex w-100 justify-content-center">
            <MessageField user={ user } />
        </div>
        );   
};

export default Layout;*/    