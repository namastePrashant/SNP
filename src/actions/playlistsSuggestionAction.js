import {
    PLAYLISTS_SUGGESTION_FETCH_REQUEST,
    PLAYLISTS_SUGGESTION_FETCH_REQUEST_SUCCESS,
    PLAYLISTS_SUGGESTION_FETCH_REQUEST_FAILURE,
    PLAYLISTS_SUGGESTION_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const playlistsSuggestionFetchRequest = () => {
    return {
        type: PLAYLISTS_SUGGESTION_FETCH_REQUEST,
    };
};

export const playlistsSuggestionFetchRequestSuccess = data => {
    return {
        type: PLAYLISTS_SUGGESTION_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const playlistsSuggestionFetchRequestFailure = error => {
    return {
        type: PLAYLISTS_SUGGESTION_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const playlistsSuggestionCleanRequest = () => {
    return {
        type: PLAYLISTS_SUGGESTION_CLEAN_REQUEST,
    };
};
