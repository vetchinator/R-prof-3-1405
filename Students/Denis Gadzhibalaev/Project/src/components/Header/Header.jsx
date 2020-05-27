import React from 'react';
import ReactDom from 'react-dom';

import './style.sass';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div className="header w-100 h-25"></div>
        ) 
    }
}

export default Header;
