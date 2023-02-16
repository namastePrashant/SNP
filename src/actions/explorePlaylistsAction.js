import {
    EXPLORE_PLAYLISTS_FETCH_REQUEST,
    EXPLORE_PLAYLISTS_FETCH_REQUEST_SUCCESS,
    EXPLORE_PLAYLISTS_FETCH_REQUEST_FAILURE,
    EXPLORE_PLAYLISTS_CLEAN_REQUEST,
    EXPLORE_PLAYLISTS_FETCH_MORE_REQUEST,
    EXPLORE_PLAYLISTS_FETCH_MORE_REQUEST_SUCCESS,
    EXPLORE_PLAYLISTS_FETCH_MORE_REQUEST_FAILURE,
    EXPLORE_PLAYLISTS_FETCH_META,    
} from '../constants/actionTypes';

export const explorePlaylistsFetchRequest = () => {
    return {
        type: EXPLORE_PLAYLISTS_FETCH_REQUEST,
    };
};

export const explorePlaylistsFetchRequestSuccess = data => {
    return {
        type: EXPLORE_PLAYLISTS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const explorePlaylistsFetchRequestFailure = error => {
    return {
        type: EXPLORE_PLAYLISTS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const explorePlaylistsCleanRequest = () => {
    return {
        type: EXPLORE_PLAYLISTS_CLEAN_REQUEST,
    };
};


export const explorePlaylistsFetchMoreRequest = () => {
    return {
        type: EXPLORE_PLAYLISTS_FETCH_MORE_REQUEST,
    };
};

export const explorePlaylistsFetchMoreRequestSuccess = data => {
    return {
        type: EXPLORE_PLAYLISTS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const explorePlaylistsFetchMoreRequestFailure = error => {
    return {
        type: EXPLORE_PLAYLISTS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const explorePlaylistsFetchMeta = meta => {
    return {
        type: EXPLORE_PLAYLISTS_FETCH_META,
        meta,
    };
};