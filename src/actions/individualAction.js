import {
    INDIVIDUAL_FETCH_REQUEST,
    INDIVIDUAL_FETCH_REQUEST_SUCCESS,
    INDIVIDUAL_FETCH_REQUEST_FAILURE,
    INDIVIDUAL_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const individualFetchRequest = () => {
    return {
        type: INDIVIDUAL_FETCH_REQUEST,
    };
};

export const individualFetchRequestSuccess = data => {

    return {
        type: INDIVIDUAL_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const individualFetchRequestFailure = error => {
    return {
        type: INDIVIDUAL_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const individualCleanRequest = () => {
    return {
        type: INDIVIDUAL_CLEAN_REQUEST,
    };
};