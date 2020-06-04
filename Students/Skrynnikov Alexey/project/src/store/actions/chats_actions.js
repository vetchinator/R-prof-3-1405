import { RSAA, getJSON } from "redux-api-middleware";

export let ADD_CHAT = '@@chat/ADD_CHAT';

export let START_CHATS_LOADING = '@@chat/START_CHATS_LOADING';
export let SUCCESS_CHATS_LOADING = '@@chat/SUCCESS_CHATS_LOADING';
export let ERROR_CHATS_LOADING = '@@chat/ERROR_CHATS_LOADING';

export let addChat = title => ({
    type: ADD_CHAT,
    title
});

export const loadChats = () => ({
    [RSAA]: {
        endpoint: '../../server/db/chats.json',
        method: 'GET',
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res)
                            .then(json => json)
            },
            ERROR_CHATS_LOADING
        ]
    }
});