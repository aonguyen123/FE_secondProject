import {
    SEARCH_USER_SUCCESS,
    FETCH_USER_SUCCESS,
    SIGN_OUT_SUCCESS,
    FETCH_USER_BY_ID_SUCCESS,
    UPDATE_PHOTOURL_USER_SUCCESS,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_INTEREST_SUCCESS,
    REMOVE_INTEREST_SUCCESS,
    SEARCH_MENTIONS_SUCCESS,
    SEARCH_MENTIONS,
    CLEAN_USER_BY_ID,
    SEND_ADD_FRIEND_SUCCESS,
    SEARCH_USER_EMPTY,
    UNMOUNT_POST_BY_ID,
    ADD_FRIEND_SUCCESS,
    SETTING_PHONE_SUCCESS,
    UN_FRIEND
} from './../constants/types';

const initialState = {
    searchMentions: [],
    userInfo: {},
    userById: {},
    statusAddFriend: null,
    searchUsers: [],
    isSearchUser: false,
    setting: true
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MENTIONS_SUCCESS:
            return {
                ...state,
                searchMentions: action.payload
            };
        case SEARCH_MENTIONS:
            return {
                ...state,
                searchMentions: []
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                userInfo: action.payload.user,
                setting: action.payload.setting
            };
        case SIGN_OUT_SUCCESS:
            return {
                ...state,
                userInfo: {}
            }
        case FETCH_USER_BY_ID_SUCCESS:
            return {
                ...state,
                userById: action.payload.user,
                statusAddFriend: action.payload.statusAddFriend
            }
        case UPDATE_PHOTOURL_USER_SUCCESS:
            const userInfo = updatePhotoURL(state.userInfo, action.payload);
            return {
                ...state,
                userInfo: {...userInfo}
            }
        case UPDATE_PROFILE_SUCCESS:
            const userInfoUpdate = updateProfile(state.userInfo, action.payload);
            return {
                ...state,
                userInfo: {...userInfoUpdate}
            }
        case UPDATE_INTEREST_SUCCESS:
            const updated = createInterest(state.userInfo, action.payload);
            return {
                ...state,
                userInfo: {...updated}
            }
        case REMOVE_INTEREST_SUCCESS:
            const removed = removeInterest(state.userInfo, action.payload);
            return {
                ...state,
                userInfo: removed
            }
        case SEARCH_USER_SUCCESS:
            return {
                ...state,
                searchUsers: action.payload,
                isSearchUser: true
            }
        case SEND_ADD_FRIEND_SUCCESS:
            return {
                ...state,
                statusAddFriend: action.payload
            }
        case CLEAN_USER_BY_ID:
            return {
                ...state,
                userById: {},
                statusAddFriend: null
            }
        case SEARCH_USER_EMPTY:
            return {
                ...state,
                isSearchUser: false,
            }
        case ADD_FRIEND_SUCCESS:
            const newUserInfo = addFriend(state.userInfo, action.payload);
            return {
                ...state,
                userInfo: {...newUserInfo}
            }
        case SETTING_PHONE_SUCCESS:
            return {
                ...state,
                setting: action.payload,
            }
        case UNMOUNT_POST_BY_ID:
            return {
                ...state,
                userById: {},
                searchUsers: []
            }
        case UN_FRIEND:
            const userUnFriend = unFriend(state.userInfo, action.payload);
            return {
                ...state,
                userInfo: {...userUnFriend}
            }
        default:
            return state;
    }
}

function updatePhotoURL(userInfo, photoURL) {
    userInfo.photoURL = photoURL;
    return userInfo;
}
function updateProfile(userInfo, userUpdated) {
    userInfo.email = userUpdated.email;
    userInfo.displayName = userUpdated.nickname;
    userInfo.description = userUpdated.profile;
    userInfo.phonenumber = userUpdated.phone;
    userInfo.provinceOrCity = userUpdated.address.province;
    userInfo.district = userUpdated.address.district;
    return userInfo;
}
function createInterest(userInfo, interest) {
    userInfo.interests.push(interest);
    return userInfo;
}
function removeInterest(userInfo, interest) {
    const index = userInfo.interests.findIndex(i => i.label === interest.label);
    if(index !== -1) {
        userInfo.interests.splice(index, 1);
    }    
    return userInfo;
}
function addFriend(userInfo, friend) {
    const idUser = Object.assign({}, friend);
    userInfo.friends.push({idUser});
    return userInfo;
}
function unFriend(userInfo, idUser) {
    const index = userInfo.friends.findIndex(friend => friend.idUser._id === idUser);
    if(index !== -1) {
        userInfo.friends.splice(index, 1);
    }
    return userInfo;
}