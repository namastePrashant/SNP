import {
    EXPLORE_SONGS_FETCH_REQUEST,
    EXPLORE_SONGS_FETCH_REQUEST_SUCCESS,
    EXPLORE_SONGS_FETCH_REQUEST_FAILURE,
    EXPLORE_SONGS_CLEAN_REQUEST,
    EXPLORE_SONGS_FETCH_MORE_REQUEST,
    EXPLORE_SONGS_FETCH_MORE_REQUEST_SUCCESS,
    EXPLORE_SONGS_FETCH_MORE_REQUEST_FAILURE,
    EXPLORE_SONGS_FETCH_META,    
} from '../constants/actionTypes';

export const exploreSongsFetchRequest = () => {
    return {
        type: EXPLORE_SONGS_FETCH_REQUEST,
    };
};

export const exploreSongsFetchRequestSuccess = data => {
    return {
        type: EXPLORE_SONGS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const exploreSongsFetchRequestFailure = error => {
    return {
        type: EXPLORE_SONGS_FETCH_REQUEST_FAILURE,
        error,
    };
};
export const exploreSongsFetchMoreRequest = () => {
    return {
        type: EXPLORE_SONGS_FETCH_MORE_REQUEST,
    };
};

export const exploreSongsFetchMoreRequestSuccess = data => {
    return {
        type: EXPLORE_SONGS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const exploreSongsFetchMoreRequestFailure = error => {
    return {
        type: EXPLORE_SONGS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const exploreSongsFetchMeta = meta => {
    return {
        type: EXPLORE_SONGS_FETCH_META,
        meta,
    };
};

export const exploreSongsCleanRequest = () => {
    return {
        type: EXPLORE_SONGS_CLEAN_REQUEST,
    };
};
