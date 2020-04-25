import allCommons from './../common';

const getStatusChats = () => {
    return allCommons.callAPICommon.callAPI('/chats/getStatusChat', 'GET', null);
}
const getRooms = () => {
    return allCommons.callAPICommon.callAPI('/chats/getRooms', 'GET', null);
}
const getChats = () => {
    return allCommons.callAPICommon.callAPI('/chats/getChats', 'GET', null);
}
const checkJoinRoom = (idRoom, idUser) => {
    return allCommons.callAPICommon.callAPI(`/chats/checkJoinRoom/idRoom=${idRoom}&idUser=${idUser}`, 'GET', null);
}

export default {
    getStatusChats,
    getRooms,
    getChats,
    checkJoinRoom
}