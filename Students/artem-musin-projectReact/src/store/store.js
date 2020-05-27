import initialReducers from './reducers/index.js'
import { createStore } from 'redux';


export default function initStore() {
    let initialStore = {

    };
    
    return createStore(initialReducers, initialStore)
}