import {
    LATEST_SONGS_FETCH_REQUEST,
    LATEST_SONGS_FETCH_REQUEST_SUCCESS,
    LATEST_SONGS_FETCH_REQUEST_FAILURE,
    LATEST_SONGS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const latestSongsFetchRequest = () => {
    return {
        type: LATEST_SONGS_FETCH_REQUEST,
    };
};

export const latestSongsFetchRequestSuccess = data => {
    
    return {
        type: LATEST_SONGS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const latestSongsFetchRequestFailure = error => {
    return {
        type: LATEST_SONGS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const latestSongsCleanRequest = () => {
    return {
        type: LATEST_SONGS_CLEAN_REQUEST,
    };
};