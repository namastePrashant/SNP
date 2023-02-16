import {
    CURRENT_TOP_HITS_FETCH_REQUEST,
    CURRENT_TOP_HITS_FETCH_REQUEST_SUCCESS,
    CURRENT_TOP_HITS_FETCH_REQUEST_FAILURE,
    CURRENT_TOP_HITS_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const currentTopHitsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case CURRENT_TOP_HITS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case CURRENT_TOP_HITS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case CURRENT_TOP_HITS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case CURRENT_TOP_HITS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default currentTopHitsReducer;
