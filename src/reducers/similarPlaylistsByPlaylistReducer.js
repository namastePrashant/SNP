import {
    SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST,
    SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST_SUCCESS,
    SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST_FAILURE,
    SIMILAR_PLAYLISTS_BY_PLAYLIST_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const similarPlaylistsByPlaylistReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case SIMILAR_PLAYLISTS_BY_PLAYLIST_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case SIMILAR_PLAYLISTS_BY_PLAYLIST_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default similarPlaylistsByPlaylistReducer;