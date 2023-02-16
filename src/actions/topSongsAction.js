import {
    TOP_SONGS_FETCH_REQUEST,
    TOP_SONGS_FETCH_REQUEST_SUCCESS,
    TOP_SONGS_FETCH_REQUEST_FAILURE,
    TOP_SONGS_FETCH_MORE_REQUEST,
    TOP_SONGS_FETCH_MORE_REQUEST_SUCCESS,
    TOP_SONGS_FETCH_MORE_REQUEST_FAILURE,
    TOP_SONGS_FETCH_META,
    TOP_SONGS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const topSongsFetchRequest = () => {
    return {
        type: TOP_SONGS_FETCH_REQUEST,
    };
};

export const topSongsFetchRequestSuccess = data => {
    return {
        type: TOP_SONGS_FETCH_REQUEST_SUCCESS,
        data,
    };
};


export const topSongsFetchRequestFailure = error => {
    return {
        type: TOP_SONGS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const topSongsFetchMoreRequest = () => {
    return {
        type: TOP_SONGS_FETCH_MORE_REQUEST,
    };
};

export const topSongsFetchMoreRequestSuccess = data => {
    return {
        type: TOP_SONGS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};


export const topSongsFetchMoreRequestFailure = error => {
    return {
        type: TOP_SONGS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const topSongsFetchMeta = meta => {
    return {
        type: TOP_SONGS_FETCH_META,
        meta,
    };
};

export const topSongsCleanRequest = () => {
    return {
        type: TOP_SONGS_CLEAN_REQUEST,
    };
};
