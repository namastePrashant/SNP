import {
    NOTIFICATION_FETCH_REQUEST,
    NOTIFICATION_FETCH_REQUEST_SUCCESS,
    NOTIFICATION_FETCH_REQUEST_FAILURE,
    NOTIFICATION_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const notificationFetchRequest = () => {
    return {
        type: NOTIFICATION_FETCH_REQUEST,
    };
};

export const notificationFetchRequestSuccess = data => {
    return {
        type: NOTIFICATION_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const notificationFetchRequestFailure = error => {
    return {
        type: NOTIFICATION_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const notificationCleanRequest = () => {
    return {
        type: NOTIFICATION_CLEAN_REQUEST,
    };
};
