import {
    LATEST_SONGS_ALL_FETCH_REQUEST,
    LATEST_SONGS_ALL_FETCH_REQUEST_SUCCESS,
    LATEST_SONGS_ALL_FETCH_REQUEST_FAILURE,
    LATEST_SONGS_ALL_FETCH_MORE_REQUEST,
    LATEST_SONGS_ALL_FETCH_MORE_REQUEST_SUCCESS,
    LATEST_SONGS_ALL_FETCH_MORE_REQUEST_FAILURE,
    LATEST_SONGS_ALL_FETCH_META,
    LATEST_SONGS_ALL_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const latestSongsAllFetchRequest = () => {
    return {
        type: LATEST_SONGS_ALL_FETCH_REQUEST,
    };
};

export const latestSongsAllFetchRequestSuccess = data => {
    
    return {
        type: LATEST_SONGS_ALL_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const latestSongsAllFetchRequestFailure = error => {
    return {
        type: LATEST_SONGS_ALL_FETCH_REQUEST_FAILURE,
        error,
    };
};
export const latestSongsAllFetchMoreRequest = () => {
    return {
        type: LATEST_SONGS_ALL_FETCH_MORE_REQUEST,
    };
};

export const latestSongsAllFetchMoreRequestSuccess = data => {
    
    return {
        type: LATEST_SONGS_ALL_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const latestSongsAllFetchMoreRequestFailure = error => {
    return {
        type: LATEST_SONGS_ALL_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const latestSongsAllFetchMeta = meta => {
    return {
        type: LATEST_SONGS_ALL_FETCH_META,
        meta,
    };
};

export const latestSongsAllCleanRequest = () => {
    return {
        type: LATEST_SONGS_ALL_CLEAN_REQUEST,
    };
};