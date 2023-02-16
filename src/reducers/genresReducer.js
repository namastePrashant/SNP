import {
    GENRES_FETCH_REQUEST,
    GENRES_FETCH_REQUEST_SUCCESS,
    GENRES_FETCH_REQUEST_FAILURE,
    GENRES_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const genresReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case GENRES_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case GENRES_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case GENRES_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case GENRES_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default genresReducer;