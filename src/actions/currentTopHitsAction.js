import {
    CURRENT_TOP_HITS_FETCH_REQUEST,
    CURRENT_TOP_HITS_FETCH_REQUEST_SUCCESS,
    CURRENT_TOP_HITS_FETCH_REQUEST_FAILURE,
    CURRENT_TOP_HITS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const currentTopHitsFetchRequest = () => {
    return {
        type: CURRENT_TOP_HITS_FETCH_REQUEST,
    };
};

export const currentTopHitsFetchRequestSuccess = data => {
    return {
        type: CURRENT_TOP_HITS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const currentTopHitsFetchRequestFailure = error => {
    return {
        type: CURRENT_TOP_HITS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const currentTopHitsCleanRequest = () => {
    return {
        type: CURRENT_TOP_HITS_CLEAN_REQUEST,
    };
};
