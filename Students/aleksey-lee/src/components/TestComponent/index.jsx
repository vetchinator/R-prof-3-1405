import {React, Component} from 'react';
import ReactDom from 'react-dom';

import './style.css';

import Message from '../Message.jsx'
import { render } from 'pug';

class Father extends Component {

    constructor(props) {
        super(props)
        this.heroes = props.heroes;
    }

    addFather() {
        heroes.push('Soldier of coalition')
        console.log(heroes)
    }


    render() {
        return (<div>
            {heroes.map((name, i) => {
                return (
                    <Message name={ name } key={i} />
                );
            })}
            <button className="btn btn-warning" onClick={addFather}>Send</button>
        </div>)
    }

    
}

export default test