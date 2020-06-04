import React from 'react';

import { push } from 'connected-react-router';

import './style.css';

import { List, ListItem } from 'material-ui/List';
import { TextField } from 'material-ui';
import ContentSend from 'material-ui/svg-icons/content/send';
import connect from 'react-redux/es/connect/connect';

import { addChat, loadChats } from '../../store/actions/chats_actions.js';
import { bindActionCreators } from 'redux';
import AddIcon from 'material-ui/svg-icons/content/add';

class ChatList extends React.Component { 
    state = {
        input : ''
    };

    handleAdd = () => {
        if (this.state.input) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    };

    handleChange = (evt) => {
        if (evt.keyCode !== 13) this.setState({ [evt.target.name]: evt.target.value });
    };

    handleKeyUp = evt => {
        if (evt.keyCode == 13) this.handleAdd();
    };

    handleNavigate = (link) => {
        this.props.push(link);
    };

    componentDidMount() {
        this.props.loadChats();
    };

    render() {
        let { chats } = this.props;

        let chatsArray = Object.keys(chats).map(key => (
                    <ListItem 
                    primaryText = { chats[key].title } 
                    leftIcon = { <ContentSend /> }
                    onClick={ () => this.handleNavigate(`/chat/${ key }`) }
                    />   
        ));
        return (
            <div className = 'clt'>
                <List>
                    { chatsArray }

                    <ListItem 
                        key = "Add new chat..."
                        leftIcon = { <AddIcon /> }
                        onClick = { this.handleAdd }
                        children = {
                            <TextField 
                                key = "textField"
                                name = "input"
                                hintText = "Add new chat"
                                onChange = { this.handleChange }
                                value = { this.state.input }
                                onKeyUp = { this.handleKeyUp }
                            />
                        }
                    />
                </List>
            </div>
        );
    };
 };

const mapStateToprops = ({ chatsReducer }) => ({ chats: chatsReducer.chats });

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push, loadChats }, dispatch);


 export default connect(mapStateToprops, mapDispatchToProps)(ChatList);