import {
    USER_PROFILE_FETCH_REQUEST,
    USER_PROFILE_FETCH_REQUEST_SUCCESS,
    USER_PROFILE_FETCH_REQUEST_FAILURE,
    USER_PROFILE_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const userProfileFetchRequest = () => {
    return {
        type: USER_PROFILE_FETCH_REQUEST,
    };
};

export const userProfileFetchRequestSuccess = data => {
    return {
        type: USER_PROFILE_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const userProfileFetchRequestFailure = error => {
    return {
        type: USER_PROFILE_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const userProfileCleanRequest = () => {
    return {
        type: USER_PROFILE_CLEAN_REQUEST,
    };
};
