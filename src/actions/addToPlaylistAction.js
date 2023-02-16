import {
    ADD_TO_PLAYLIST_REQUEST,
    ADD_TO_PLAYLIST_REQUEST_SUCCESS,
    ADD_TO_PLAYLIST_REQUEST_FAILURE,    
} from '../constants/actionTypes';

export const addToPlaylistRequest = (playlistId) => {
    return {
        type: ADD_TO_PLAYLIST_REQUEST,
        id:playlistId,
    };
};

export const addToPlaylistRequestSuccess = data => {
    return {
        type: ADD_TO_PLAYLIST_REQUEST_SUCCESS,
        data,
    };
};

export const addToPlaylistRequestFailure = error => {
    return {
        type: ADD_TO_PLAYLIST_REQUEST_FAILURE,
        error,
    };
};

