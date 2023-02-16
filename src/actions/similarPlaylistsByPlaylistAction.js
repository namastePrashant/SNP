import {
    SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST,
    SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST_SUCCESS,
    SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST_FAILURE,
    SIMILAR_PLAYLISTS_BY_PLAYLIST_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const similarPlaylistsByPlaylistFetchRequest = () => {
    return {
        type: SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST,
    };
};

export const similarPlaylistsByPlaylistFetchRequestSuccess = data => {

    return {
        type: SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const similarPlaylistsByPlaylistFetchRequestFailure = error => {
    return {
        type: SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const similarPlaylistsByPlaylistCleanRequest = () => {
    return {
        type: SIMILAR_PLAYLISTS_BY_PLAYLIST_CLEAN_REQUEST,
    };
};