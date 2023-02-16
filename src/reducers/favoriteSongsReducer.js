import {
    FAVORITE_SONGS_FETCH_REQUEST,
    FAVORITE_SONGS_FETCH_REQUEST_SUCCESS,
    FAVORITE_SONGS_FETCH_REQUEST_FAILURE,
    FAVORITE_SONGS_CLEAN_REQUEST,
    FAVORITE_SONGS_FETCH_DETAIL_SUCCESS
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
    total_duration:0,
    total_songs:0,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const favoriteSongsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case FAVORITE_SONGS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case FAVORITE_SONGS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case FAVORITE_SONGS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case FAVORITE_SONGS_FETCH_DETAIL_SUCCESS:
            return {
                ...state,
                total_duration:action.total_duration,
                total_songs:action.total_songs
            }

        case FAVORITE_SONGS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default favoriteSongsReducer;
