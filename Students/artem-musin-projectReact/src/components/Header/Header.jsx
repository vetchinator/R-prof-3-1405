import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { Box } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerText: 'Chat in React Messenger'
        }

    }
    render() {

        
        return (
      <AppBar position="relative"
        style={{
            flexGrow: 1,
            borderRadius: "1.5em",
            top: '1em',
            }}>
        <Toolbar>
          <IconButton edge="start" 
            style={{marginRight: '1em'}} 
            color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography 
            style={{flexGrow: 1}} 
            variant="h6">
            React Messenger by Artem M
          </Typography>
          <Button color="inherit">
            <AccountCircle />
          </Button>
        </Toolbar>
      </AppBar>
        )
    }
}