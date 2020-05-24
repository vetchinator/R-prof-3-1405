import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import { List, ListItem, ListItemText, Divider, Badge } from '@material-ui/core'
import { Mail } from '@material-ui/icons';

export default class ChatList extends Component {
    render() {
        return (
                <List component="nav" 
                    style={{
                        width: '650px'
                        }}>
                    <ListItem button>
                        <ListItemText style={{padding: '0em 1em'}} primary="Chat with my parents" />
                        <Badge color="secondary" badgeContent={2}> 
                            <Mail />
                        </Badge>
                    </ListItem>
                    <Divider />
                        <ListItem button>
                        <ListItemText style={{padding: '0em 1em'}} primary="Chat with my friends" />
                        <Badge color="secondary" badgeContent={10}> 
                            <Mail />
                        </Badge>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText style={{padding: '0em 1em'}} primary="Chat with my girls" />
                        <Badge color="secondary" badgeContent={1000} max={999}> 
                            <Mail />
                        </Badge>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText style={{padding: '0em 1em'}} primary="Chat with my bestie" />
                        <Badge color="secondary" badgeContent={1}> 
                            <Mail />
                        </Badge>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText style={{padding: '0em 1em'}} primary="Chat with my pet" />
                        <Mail />
                    </ListItem>
                </List>
            
        )
    }
}