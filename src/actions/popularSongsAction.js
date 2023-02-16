import {
    POPULAR_SONGS_FETCH_REQUEST,
    POPULAR_SONGS_FETCH_REQUEST_SUCCESS,
    POPULAR_SONGS_FETCH_REQUEST_FAILURE,
    POPULAR_SONGS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const popularSongsFetchRequest = () => {
    return {
        type: POPULAR_SONGS_FETCH_REQUEST,
    };
};

export const popularSongsFetchRequestSuccess = data => {
    return {
        type: POPULAR_SONGS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const popularSongsFetchRequestFailure = error => {
    return {
        type: POPULAR_SONGS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const popularSongsCleanRequest = () => {
    return {
        type: POPULAR_SONGS_CLEAN_REQUEST,
    };
};
