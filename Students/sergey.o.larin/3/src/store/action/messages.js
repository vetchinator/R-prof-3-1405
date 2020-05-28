export let SEND_MSG = '@@messages/SEND_MSG';

export let sendMessage = (messageId, user, text) => ({
    type: SEND_MSG,
    messageId,
    user,
    text,
});