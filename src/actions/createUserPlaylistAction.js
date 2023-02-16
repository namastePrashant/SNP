import {
    CREATE_PLAYLIST_REQUEST,
    CREATE_PLAYLIST_REQUEST_SUCCESS,
    CREATE_PLAYLIST_REQUEST_FAILURE,    
} from '../constants/actionTypes';

export const createPlaylistRequest = () => {
    return {
        type: CREATE_PLAYLIST_REQUEST,
    };
};

export const createPlaylistRequestSuccess = data => {
    return {
        type: CREATE_PLAYLIST_REQUEST_SUCCESS,
        data,
    };
};

export const createPlaylistRequestFailure = error => {
    return {
        type: CREATE_PLAYLIST_REQUEST_FAILURE,
        error,
    };
};

