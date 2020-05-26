import React from 'react';
import ReactDom from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const users = [
  {
    id: 1,
    name: 'Bob'
  },
  {
    id: 2,
    name: 'Alice'
  },
  {
    id: 3,
    name: 'Clare'
  },
  {
    id: 4,
    name: 'Alex'
  }
]

function ChatList() {
  const classes = useStyles();
  return (
    <List dense className={classes.root}>
      {users.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value.id}`;
        return (
          <ListItem key={value.id} button>
            <ListItemAvatar>
              <Avatar className={classes.orange}>{value.name.substring(0,2)}</Avatar>
            </ListItemAvatar>
            <ListItemText id={labelId} primary={value.name} />
          </ListItem>
        );
      })}
    </List>
  )
}

export default ChatList;