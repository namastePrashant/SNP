import {
    ADVERTISEMENT_FETCH_REQUEST,
    ADVERTISEMENT_FETCH_REQUEST_SUCCESS,
    ADVERTISEMENT_FETCH_REQUEST_FAILURE,
    ADVERTISEMENT_BY_LOCATION_FETCH,
    ADVERTISEMENT_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const advertisementReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case ADVERTISEMENT_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case ADVERTISEMENT_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case ADVERTISEMENT_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case ADVERTISEMENT_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        case ADVERTISEMENT_BY_LOCATION_FETCH:
            return {
                ...state,
                payload:action.data,
                loading:false,
            }

        default:
            return state;
    }
};

export default advertisementReducer;
