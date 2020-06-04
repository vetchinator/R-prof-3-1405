import { combineReducers } from 'redux';
import msgReducer from './messages_reducers.js';
import prflReducer from './profile_reducers.js';
import chatsReducer from './chats_reducer.js';

export default combineReducers({ msgReducer, prflReducer, chatsReducer });