import {
    LATEST_ARTISTS_FETCH_REQUEST,
    LATEST_ARTISTS_FETCH_REQUEST_SUCCESS,
    LATEST_ARTISTS_FETCH_REQUEST_FAILURE,
    LATEST_ARTISTS_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const latestArtistsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case LATEST_ARTISTS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LATEST_ARTISTS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case LATEST_ARTISTS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case LATEST_ARTISTS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default latestArtistsReducer;