import update from "react-addons-update";

import {ADD_CHAT} from '../actions/chats_actions.js';
import {DEL_CHAT} from '../actions//chats_actions.js';

let initialStore = {
  chats: {
    1: {
      title: 'Mark Zuckerberg',
      messagesList: []
    },
    2: {
      title: 'John Doe',
      messagesList: []
    },
    3: {
      title: 'Bill Gates',
      messagesList: []
    }
  }
}

export default function chatsReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_CHAT: {
      // let chatId = Object.keys(store.chats).length + 1;
      let chatId = Date.now();

      return update(store, {
        chats: {
          $merge: {
            [chatId]: {
              title: action.title,
              messagesList: []
            }
          }
        }
      });
    };
    case DEL_CHAT: {
      let chatId = action.id;
      let newStore = {...store};
      delete newStore['chats'][chatId];
      return newStore;
    }
    default:
      return store;
  }
}
