import {
    INDIVIDUAL_GENRE_PLAYLISTS_FETCH_REQUEST,
    INDIVIDUAL_GENRE_PLAYLISTS_FETCH_REQUEST_SUCCESS,
    INDIVIDUAL_GENRE_PLAYLISTS_FETCH_REQUEST_FAILURE,
    INDIVIDUAL_GENRE_PLAYLISTS_FETCH_MORE_REQUEST,
    INDIVIDUAL_GENRE_PLAYLISTS_FETCH_MORE_REQUEST_SUCCESS,
    INDIVIDUAL_GENRE_PLAYLISTS_FETCH_MORE_REQUEST_FAILURE,
    INDIVIDUAL_GENRE_PLAYLISTS_FETCH_META,
    INDIVIDUAL_GENRE_PLAYLISTS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const individualGenrePlaylistsFetchRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_PLAYLISTS_FETCH_REQUEST,
    };
};

export const individualGenrePlaylistsFetchRequestSuccess = data => {

    return {
        type: INDIVIDUAL_GENRE_PLAYLISTS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const individualGenrePlaylistsFetchRequestFailure = error => {
    return {
        type: INDIVIDUAL_GENRE_PLAYLISTS_FETCH_REQUEST_FAILURE,
        error,
    };
};
export const individualGenrePlaylistsFetchMoreRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_PLAYLISTS_FETCH_MORE_REQUEST,
    };
};

export const individualGenrePlaylistsFetchMoreRequestSuccess = data => {

    return {
        type: INDIVIDUAL_GENRE_PLAYLISTS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const individualGenrePlaylistsFetchMoreRequestFailure = error => {
    return {
        type: INDIVIDUAL_GENRE_PLAYLISTS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const individualGenrePlaylistsFetchMeta = meta => {
    return {
        type: INDIVIDUAL_GENRE_PLAYLISTS_FETCH_META,
        meta,
    };
};

export const individualGenrePlaylistsCleanRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_PLAYLISTS_CLEAN_REQUEST,
    };
};