import update from 'react-addons-update';

//import actions
import { SEND_MSG } from '../actions/messages_actions.js';

const initialStore = {
    messages: {
        1: {
            user: 'John Carmack',
            text: 'Hello Bot!' 
        },
        2: {
            user: null,
            text: 'Hi!'
        },
        3: {
            user: 'John Carmack',
            text: 'How are you?' 
        },
        4: {
            user: null,
            text: 'I am fine!'
        }
    }
}

export default function msgReducer(store = initialStore, action) {
    switch(action.type) {
        case SEND_MSG: {
            return update(store, {
                messages: { $merge: { [action.messageId]: { user: action.sender, text: action.text } } }
            })
        }
        default:
            return store;
    }    
}