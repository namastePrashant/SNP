import {
    RECENTLY_PLAYED_FETCH_REQUEST,
    RECENTLY_PLAYED_FETCH_REQUEST_SUCCESS,
    RECENTLY_PLAYED_FETCH_REQUEST_FAILURE,
    RECENTLY_PLAYED_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const recentlyPlayedFetchRequest = () => {
    return {
        type: RECENTLY_PLAYED_FETCH_REQUEST,
    };
};

export const recentlyPlayedFetchRequestSuccess = data => {
    return {
        type: RECENTLY_PLAYED_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const recentlyPlayedFetchRequestFailure = error => {
    return {
        type: RECENTLY_PLAYED_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const recentlyPlayedCleanRequest = () => {
    return {
        type: RECENTLY_PLAYED_CLEAN_REQUEST,
    };
};
