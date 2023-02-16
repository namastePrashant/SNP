import {
    USER_DATA_FETCH_REQUEST,
    USER_DATA_FETCH_REQUEST_SUCCESS,
    USER_DATA_FETCH_REQUEST_FAILURE,
    USER_DATA_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const userDataFetchRequest = () => {
    return {
        type: USER_DATA_FETCH_REQUEST,
    };
};

export const userDataFetchRequestSuccess = data => {
    return {
        type: USER_DATA_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const userDataFetchRequestFailure = error => {
    return {
        type: USER_DATA_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const userDataCleanRequest = () => {
    return {
        type: USER_DATA_CLEAN_REQUEST,
    };
};
