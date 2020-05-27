import React from 'react';

import MessagesField from '../components/MessageField/MessageField.jsx';
import ChatItem from '../components/ChatItem/ChatItem.jsx';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

let ChatItemsLabel = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let { user } = this.props;

    return (<div className="d-flex flex-wrap w-100 justify-content-center">
      <div className="col col-12 pt-4 pb-5"><h1 className="text-center">HELLO REACT</h1></div>
      <div className="col col-4">
        <div className="chatlist">
          <h3>Chat list</h3>
          <List>
            {ChatItemsLabel.map((item, i)=> <ListItem key={i}>{item}</ListItem>)}
          </List>
        </div>
      </div>
      <div className="col col-8">
        <MessagesField user={ user } />
      </div>
    </div>)
  }
}