import React from 'react';

import { Link } from 'react-router-dom';

import { List, ListItem,ListItemIcon,ListItemText, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';

import { connect } from 'react-redux';
import { addChat } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';

class ChatList extends React.Component {
    state = {
        input: ''
    }

    handleAdd = () => {
        if (this.state.input) {
            this.props.addChat(this.state.input);
            this.setState({input: ''});
        }
    }

    handleChange = (evt) => {
        if (evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value })
    }

    handleKeyUp = evt => {
        if (evt.keyCode == 13) this.handleAdd();
    }

    render() {
        let { chats } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
            <Link to = { `/chat/${ key }` } key = { key }>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary= { chats[key].title } />
                </ListItem> 
            </Link>
        ));
        return (
            <List>
                { chatsArray }
                
                <ListItem
                    key = "Add new chat..."
                    onClick = { this.handleAdd }
                >
                    <AddIcon />
                    <TextField 
                        key = "textField"
                        name = "input"
                        label = "Add new chat"
                        onChange = { this.handleChange }
                        value = { this.state.input }
                        onKeyUp = { this.handleKeyUp }
                    />
                </ListItem>
            </List>
        )
    }
}

const mapStateToProps = ({ chatsReducer }) => ({ chats: chatsReducer.chats })

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)