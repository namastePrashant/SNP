import {
    FEATURED_FETCH_REQUEST,
    FEATURED_FETCH_REQUEST_SUCCESS,
    FEATURED_FETCH_REQUEST_FAILURE,
    FEATURED_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const featuredReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case FEATURED_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case FEATURED_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case FEATURED_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case FEATURED_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default featuredReducer;
