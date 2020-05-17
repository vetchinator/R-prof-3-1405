import React from 'react';
import ReactDom from 'react-dom';

import './style.css';
import Message from '../Message.jsx';

export default class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.addMessageClick = this.addMessageClick.bind(this);
      this.messageAddedClick = this.messageAddedClick.bind(this);
      this.state = {isAddedIn: false};
    }
  
    addMessageClick() {
      this.setState({isAddedIn: true});
    }
  
    messageAddedClick() {
      this.setState({isAddedIn: false});
    }
  
    render() {
      const isAddedIn = this.state.isAddedIn;
      let button;
  
      if (isAddedIn) {
        button = <LogoutButton onClick={this.messageAddedClick} />;
      } else {
        button = <LoginButton onClick={this.addMessageClick} />;
      }
  
      return (
        <div>
          <h1>HELLO REACT !!!</h1>
          {button}
        </div>
      );
    }
  }

  function Test(props) {
    let arr = ['Dart Vader', 'Chewbakka', 'Master Yoda'];

    let msgArr = arr.map( name => {
        return (<Message name={name} />);
        });

    return (
        <div>
            {msgArr}
        </div>
    );
  }
  
  function LoginButton(props) {  
    return (
      <div>
      <button onClick={props.onClick}>
        Add message
      </button>
      </div>
    );
  }
  
  function LogoutButton(props) {
    return (
      <div>
      <button onClick={props.onClick}>
        Clear page!
      </button>
      <Test />
      </div>
    );
  }