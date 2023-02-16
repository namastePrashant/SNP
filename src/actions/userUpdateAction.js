import {
    USER_PROFILE_UPDATE_REQUEST,
    USER_PROFILE_UPDATE_REQUEST_SUCCESS,
    USER_PROFILE_UPDATE_REQUEST_FAILURE,
} from '../constants/actionTypes';

export const userProfileUpdateRequest = () => {
    return {
        type: USER_PROFILE_UPDATE_REQUEST,
    };
};

export const userProfileUpdateRequestSuccess = data => {
    return {
        type: USER_PROFILE_UPDATE_REQUEST_SUCCESS,
        data,
    };
};

export const userProfileUpdateRequestFailure = error => {
    return {
        type: USER_PROFILE_UPDATE_REQUEST_FAILURE,
        error,
    };
};