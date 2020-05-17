import React from 'react';
import ReactDom from 'react-dom';

import './style.css';
import List from '../messageComponent/list.jsx'

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', messages: []};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.state.messages.push(this.state.value);
      this.setState({messages: this.state.messages});
      event.preventDefault();
    }
  
    render() {
      return (  
        <div>
            <form id="formMsg" onSubmit={this.handleSubmit}>
                <input type="text" id="textMsg" value={this.state.value} onChange={this.handleChange} />
                <input className="btn" id="btn-msg" type="submit" value="Отправить" />
            </form>
            <ul>
                {
                      this.list = this.state.messages.map((name) => {
                        return (
                            <List name={name} />  
                            )
                    }) 
                }
            </ul>    
        </div>
      );
    }
  }


export default NameForm