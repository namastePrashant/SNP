import {
    FEATURED_PLAYLIST_FETCH_REQUEST,
    FEATURED_PLAYLIST_FETCH_REQUEST_SUCCESS,
    FEATURED_PLAYLIST_FETCH_REQUEST_FAILURE,
    FEATURED_PLAYLIST_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const featuredPlaylistFetchRequest = () => {
    return {
        type: FEATURED_PLAYLIST_FETCH_REQUEST,
    };
};

export const featuredPlaylistFetchRequestSuccess = data => {

    return {
        type: FEATURED_PLAYLIST_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const featuredPlaylistFetchRequestFailure = error => {
    return {
        type: FEATURED_PLAYLIST_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const featuredPlaylistCleanRequest = () => {
    return {
        type: FEATURED_PLAYLIST_CLEAN_REQUEST,
    };
};