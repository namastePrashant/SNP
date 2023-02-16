import {
    POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST,
    POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST_SUCCESS,
    POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST_FAILURE,
    POPULAR_SONGS_BY_ARTIST_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    id:undefined,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const popularSongsByArtistReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                id:action.id,
            });

        case POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case POPULAR_SONGS_BY_ARTIST_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case POPULAR_SONGS_BY_ARTIST_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default popularSongsByArtistReducer;