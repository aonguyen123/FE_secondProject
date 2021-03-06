import { message } from 'antd';
import {
    SEARCH_USER,
    SEARCH_USER_SUCCESS,
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    SEARCH_USER_ERROR,
    FETCH_USER_BY_ID,
    FETCH_USER_BY_ID_SUCCESS,
    FETCH_USER_BY_ID_ERROR,
    UPDATE_PHOTOURL_USER,
    UPDATE_PHOTOURL_USER_SUCCESS,
    UPDATE_PHOTOURL_USER_ERROR,
    UPDATE_PROFILE,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_ERROR,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_ERROR,
    UPDATE_PASSWORD,
    UPDATE_INTEREST,
    UPDATE_INTEREST_SUCCESS,
    UPDATE_INTEREST_ERROR,
    REMOVE_INTEREST_SUCCESS,
    REMOVE_INTEREST_ERROR,
    REMOVE_INTEREST,
    SEARCH_MENTIONS,
    SEARCH_MENTIONS_SUCCESS,
    SEARCH_MENTIONS_ERROR,
    CLEAN_USER_BY_ID,
    SEND_ADD_FRIEND_SUCCESS,
    SEARCH_USER_EMPTY,
    ADD_FRIEND_SUCCESS,
    SETTING_PHONE,
    SETTING_PHONE_SUCCESS,
    SETTING_PHONE_ERROR,
} from './../constants/types';

const searchMentions = q => {
    return {
        type: SEARCH_MENTIONS,
        payload: { q }
    };
};
const searchMentionsSuccess = data => {
    return {
        type: SEARCH_MENTIONS_SUCCESS,
        payload: data
    };
};
const searchMentionsError = notice => {
    message.error(notice, 4);
    return {
        type: SEARCH_MENTIONS_ERROR
    }
}
const fetchUser = (idUser) => {
    return {
        type: FETCH_USER,
        payload: {
            idUser
        }
    };
};
const fetchUserSuccess = data => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: data
    };
};
const fetchUserError = notice => {
    message.error(notice, 4);
    return {
        type: FETCH_USER_ERROR
    }
}
const fetchUserById = (idUser, idUserCurrent) => {
    return {
        type: FETCH_USER_BY_ID,
        payload: { idUser, idUserCurrent }
    }
}
const fetchUserByIdSuccess = data => {
    return {
        type: FETCH_USER_BY_ID_SUCCESS,
        payload: data
    }
}
const fetchUserByIdError = error => {
    return {
        type: FETCH_USER_BY_ID_ERROR,
        payload: error
    }
}
const cleanUserById = () => {
    return {
        type: CLEAN_USER_BY_ID        
    }
}
const updatePhotoURL = (photoURL, idUser) => {
    return {
        type: UPDATE_PHOTOURL_USER,
        payload: { photoURL, idUser }
    }
}
const updatePhotoURLSuccess = photoURL => {
    return {
        type: UPDATE_PHOTOURL_USER_SUCCESS,
        payload: photoURL
    }
}
const updatePhotoURLError = error => {
    message.error(error, 4);
    return {
        type: UPDATE_PHOTOURL_USER_ERROR
    }
}
const updateProfile = (values, idUser) => {
    return {
        type: UPDATE_PROFILE,
        payload: {values, idUser}
    }
}
const updateProfileSuccess = (data, notice) => {
    message.success(notice, 4);
    return {
        type: UPDATE_PROFILE_SUCCESS,
        payload: data
    }
}
const updateProfileError = error => {
    message.error(error, 4);
    return {
        type: UPDATE_PROFILE_ERROR
    }
}
const updatePassword = (newPass, oldPass, idUser) => {
    return {
        type: UPDATE_PASSWORD,
        payload: { newPass, oldPass, idUser }
    }
}
const updatePasswordSuccess = notice => {
    message.success(notice, 4);
    return {
        type: UPDATE_PASSWORD_SUCCESS
    }
}
const updatePasswordError = error => {
    message.error(error, 4);
    return {
        type: UPDATE_PASSWORD_ERROR
    }
}
const updateInterest = (interest, idUser) => {
    return {
        type: UPDATE_INTEREST,
        payload: {interest, idUser}
    }
}
const updateInterestSuccess = interest => {
    return {
        type: UPDATE_INTEREST_SUCCESS,
        payload: interest
    }
}
const updateInterestError = error => {
    message.error(error, 4);
    return {
        type: UPDATE_INTEREST_ERROR        
    }
}
const removeInterest = (interest, idUser) => {
    return {
        type: REMOVE_INTEREST,
        payload: {interest, idUser}
    }
}
const removeInterestSuccess = interest => {
    return {
        type: REMOVE_INTEREST_SUCCESS,
        payload: interest
    }
}
const removeInterestError = error => {
    message.error(error, 4);
    return {
        type: REMOVE_INTEREST_ERROR
    }
}
const searchUser = (q, idUser) => {
    return {
        type: SEARCH_USER,
        payload: {q, idUser}
    }
}
const searchUserSuccess = data => {
    return {
        type: SEARCH_USER_SUCCESS,
        payload: data
    }
}
const searchUserError = error => {
    message.error(error, 4);
    return {
        type: SEARCH_USER_ERROR
    }
}
const searchUserEmpty = () => {
    return {
        type: SEARCH_USER_EMPTY
    }
}
const sendAddFriendSuccess = data => {
    return {
        type: SEND_ADD_FRIEND_SUCCESS,
        payload: data
    }
}
const addFriendSuccess = friend => {
    return {
        type: ADD_FRIEND_SUCCESS,
        payload: friend
    }
}
const settingPhone = (idUser, settingPhone)  => {
    return {
        type: SETTING_PHONE,
        payload: {idUser, settingPhone}
    }
}
const settingPhoneSuccess = data => {
    return {
        type: SETTING_PHONE_SUCCESS,
        payload: data
    }
}
const settingPhoneError = error => {
    message.error(error, 4);
    return {
        type: SETTING_PHONE_ERROR
    }
}

export default {
    searchMentions,
    searchMentionsSuccess,
    searchMentionsError,
    fetchUser,
    fetchUserSuccess,
    fetchUserError,
    fetchUserById,
    fetchUserByIdSuccess,
    fetchUserByIdError,
    cleanUserById,  
    updatePhotoURL,
    updatePhotoURLSuccess, 
    updatePhotoURLError,
    updateProfile,
    updateProfileSuccess,
    updateProfileError,
    updatePassword, 
    updatePasswordSuccess,
    updatePasswordError,
    updateInterest,
    updateInterestSuccess,
    updateInterestError,
    removeInterest,
    removeInterestSuccess,
    removeInterestError,
    searchUser, 
    searchUserSuccess,
    searchUserError,
    searchUserEmpty,
    sendAddFriendSuccess,
    addFriendSuccess,
    settingPhone,
    settingPhoneSuccess,
    settingPhoneError
};
