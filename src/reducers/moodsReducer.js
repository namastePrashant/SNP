import {
    MOODS_FETCH_REQUEST,
    MOODS_FETCH_REQUEST_SUCCESS,
    MOODS_FETCH_REQUEST_FAILURE,
    MOODS_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const moodsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case MOODS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case MOODS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case MOODS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case MOODS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default moodsReducer;
