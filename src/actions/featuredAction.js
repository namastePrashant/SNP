import {
    FEATURED_FETCH_REQUEST,
    FEATURED_FETCH_REQUEST_SUCCESS,
    FEATURED_FETCH_REQUEST_FAILURE,
    FEATURED_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const featuredFetchRequest = () => {
    return {
        type: FEATURED_FETCH_REQUEST,
    };
};

export const featuredFetchRequestSuccess = data => {
    
    return {
        type: FEATURED_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const featuredFetchRequestFailure = error => {
    return {
        type: FEATURED_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const featuredCleanRequest = () => {
    return {
        type: FEATURED_CLEAN_REQUEST,
    };
};