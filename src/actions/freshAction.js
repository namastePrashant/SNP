import {
    FRESH_FETCH_REQUEST,
    FRESH_FETCH_REQUEST_SUCCESS,
    FRESH_FETCH_REQUEST_FAILURE,
    FRESH_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const freshFetchRequest = () => {
    return {
        type: FRESH_FETCH_REQUEST,
    };
};

export const freshFetchRequestSuccess = data => {
    return {
        type: FRESH_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const freshFetchRequestFailure = error => {
    return {
        type: FRESH_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const freshCleanRequest = () => {
    return {
        type: FRESH_CLEAN_REQUEST,
    };
};
