import {
    USER_PASSWORD_UPDATE_REQUEST,
    USER_PASSWORD_UPDATE_REQUEST_SUCCESS,
    USER_PASSWORD_UPDATE_REQUEST_FAILURE,
} from '../constants/actionTypes';

export const userPasswordUpdateRequest = () => {
    return {
        type: USER_PASSWORD_UPDATE_REQUEST,
    };
};

export const userPasswordUpdateRequestSuccess = data => {
    return {
        type: USER_PASSWORD_UPDATE_REQUEST_SUCCESS,
        data,
    };
};

export const userPasswordUpdateRequestFailure = error => {
    return {
        type: USER_PASSWORD_UPDATE_REQUEST_FAILURE,
        error,
    };
};