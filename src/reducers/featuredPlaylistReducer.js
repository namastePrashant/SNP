import {
    FEATURED_PLAYLIST_FETCH_REQUEST,
    FEATURED_PLAYLIST_FETCH_REQUEST_SUCCESS,
    FEATURED_PLAYLIST_FETCH_REQUEST_FAILURE,
    FEATURED_PLAYLIST_CLEAN_REQUEST,
} from '../constants/actionTypes';


const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const featuredPlaylistReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case FEATURED_PLAYLIST_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case FEATURED_PLAYLIST_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case FEATURED_PLAYLIST_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case FEATURED_PLAYLIST_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default featuredPlaylistReducer;