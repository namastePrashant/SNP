import {
    RECENTLY_PLAYED_ALL_FETCH_REQUEST,
    RECENTLY_PLAYED_ALL_FETCH_REQUEST_SUCCESS,    
    RECENTLY_PLAYED_ALL_FETCH_REQUEST_FAILURE,
    RECENTLY_PLAYED_ALL_CLEAN_REQUEST,
    RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST,
    RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST_SUCCESS,
    RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST_FAILURE,
    RECENTLY_PLAYED_ALL_FETCH_META_INFO,
} from '../constants/actionTypes';

export const recentlyPlayedAllFetchRequest = () => {
    return {
        type: RECENTLY_PLAYED_ALL_FETCH_REQUEST,
    };
};

export const recentlyPlayedAllFetchMoreRequest = () => {
    return {
        type: RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST,
    };
};

export const recentlyPlayedAllFetchRequestSuccess = data => {
    return {
        type: RECENTLY_PLAYED_ALL_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const recentlyPlayedAllFetchMoreRequestSuccess = data => {
    return {
        type: RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const recentlyPlayedAllFetchMetaInfo = meta => {
    return {
        type: RECENTLY_PLAYED_ALL_FETCH_META_INFO,
        meta,
    };
};

export const recentlyPlayedAllFetchRequestFailure = error => {
    return {
        type: RECENTLY_PLAYED_ALL_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const recentlyPlayedAllFetchMoreRequestFailure = error => {
    return {
        type: RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const recentlyPlayedAllCleanRequest = () => {
    return {
        type: RECENTLY_PLAYED_ALL_CLEAN_REQUEST,
    };
};
