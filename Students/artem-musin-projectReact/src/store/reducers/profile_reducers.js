import update from 'react-addons-update';

//import actions
import {SET_NAME} from '../actions/profile_actions.js';
import {SET_BIO} from '../actions/profile_actions.js';
import {SET_DATE} from '../actions/profile_actions.js';


const initialStore = {
  user: '',
  bio: '',
  date: ''
}

export default function prflReducer(store = initialStore, action) {
  switch (action.type) {
    case SET_NAME: 
      return {...store, user: action.name};
    case SET_BIO:
      return {...store, bio: action.text};
    case SET_DATE: 
      return {...store, date: action.text}
    default:
      return store;
  }
}