import update from 'react-addons-update';

import { SEND_MSG } from '../action/messages.js';

const initialStore = {
    user: 'Ext',
    users: ['Вася', 'Петр', 'Марина'],
    messages: {
        1: {
            user: 'Ext',
            text: 'Привет'
        },
        2: {
            user: null,
            text: 'Привет'
        },
        3: {
            user: null,
            text: 'Как твои дела?'
        }
    }
}

export default function msgReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MSG: {
            return update(store, {
                messages: {
                    $merge: {
                        [action.messageId]: {
                            user: action.user,
                            text: action.text,
                        }
                    }
                }
            })
        }
        default:
            return store;
    }
}