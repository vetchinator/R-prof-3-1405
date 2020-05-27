import update from 'react-addons-update';

//import actions

import { SEND_MSG } from '../actions/messages_actions.js';

const initialStore = {
    messages: {
        1: {
            user: null,
            text: 'Welcome Friend!'
        },
        2: {
            user: "User1",
            text: 'Hi bot'
        },
        3: {
            user: null,
            text: 'Hi'
        },
        4: {
            user: 'User1',
            text: 'How are you ?'
        },
        5: {
            user: null,
            text: 'Fine'
        }
    }
}

export default function msgReducer(store = initialStore, action) {          
    switch (action.type) {
        case SEND_MSG: {
            return update(store, {
                messages: { $merge: { [action.messageId]: { user: action.sender, text: action.text } } }
            })
        }  
        default:
            return store;
    }
}