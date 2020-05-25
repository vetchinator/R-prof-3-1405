import update from 'react-addons-update';

// import actions 

import { SEND_MSG } from '../actions/messages_actions.js';


const initialStore = {
    messages: {
        1: {
            user: null,
            text: 'Hello, human. What do you need from me?'
        },
    }
}

export default function msgReducer(store = initialStore, action) {
    switch(action.type) {
        case SEND_MSG: {
            return update(store, {
                messages: { $merge: { [action.messageId]: {user: action.sender, text: action.text} } }
            })
        }
        default: 
            return store;
    }
}