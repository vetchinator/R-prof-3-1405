import React from 'react';
import ReactDom from 'react-dom';

import Message from './Message.jsx'

class Father extends React.Component {

    constructor(props) {
        super(props)
        this.state = {heroes : props.heroes}
    }

    addFather() {
      this.setState(prevState => {
        return { 
          heroes: [...this.state.heroes, 'solider of Coalition']
        };
      });
    }

    render() {
      return (<div>
        {this.state.heroes.map((name, i) => {
          return (
              <Message name={ name } key={i} />
          );
        })}
        <button className="btn btn-warning" onClick={this.addFather.bind(this)}>Send</button>
      </div>)
    }
}

export default Father