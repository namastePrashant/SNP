import {
    USER_RECENT_PLAYLISTS_FETCH_REQUEST,
    USER_RECENT_PLAYLISTS_FETCH_REQUEST_SUCCESS,
    USER_RECENT_PLAYLISTS_FETCH_REQUEST_FAILURE,
    USER_RECENT_PLAYLISTS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const userRecentPlaylistsFetchRequest = () => {
    return {
        type: USER_RECENT_PLAYLISTS_FETCH_REQUEST,
    };
};

export const userRecentPlaylistsFetchRequestSuccess = data => {
    return {
        type: USER_RECENT_PLAYLISTS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const userRecentPlaylistsFetchRequestFailure = error => {
    return {
        type: USER_RECENT_PLAYLISTS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const userRecentPlaylistsCleanRequest = () => {
    return {
        type: USER_RECENT_PLAYLISTS_CLEAN_REQUEST,
    };
};
