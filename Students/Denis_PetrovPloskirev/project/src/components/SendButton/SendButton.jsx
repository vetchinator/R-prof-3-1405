import React, {Component} from 'react';
import ReactDom from 'react-dom';

import './style.css';

class SendButton extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button className='sndBtn' onClick={this.props.handler}>SEND</button>
      </div>
    )
  }
}

export default SendButton;
