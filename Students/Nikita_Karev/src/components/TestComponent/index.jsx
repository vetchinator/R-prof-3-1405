import React from 'react';
import ReactDom from 'react-dom';

import './style.css';
import Message from '../Message.jsx';

function test(props) {
    // let name = this.props.father;
    // let { father } = props;
    let arr = ['Dart Vader', 'Chewbakka', 'Master Yoda'];

    // let html = (<span><i>{ father } says:</i></span>);

    let msgArr = arr.map(name => {
        return (<Message name={ name } />);
    });

    return (
        <div>
            { msgArr }
        </div>
        );
}

export default test;