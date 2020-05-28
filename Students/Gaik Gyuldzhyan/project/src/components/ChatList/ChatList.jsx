import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

export default class ChatList extends React.Component {
    render() {
        return (
            <div className="d-flex">
                    <div className="">
                        <p>Chat 1</p>
                    </div>
                    <div className="">
                        <p>Chat 2</p>
                    </div>
                    <div className="">
                        <p>Chat 3</p>
                    </div>                                                                  
            </div>
        );
    }
}

