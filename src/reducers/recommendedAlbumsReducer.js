import {
    RECOMMENDED_ALBUMS_FETCH_REQUEST,
    RECOMMENDED_ALBUMS_FETCH_REQUEST_SUCCESS,
    RECOMMENDED_ALBUMS_FETCH_REQUEST_FAILURE,
    RECOMMENDED_ALBUMS_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const recommendedAlbumsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case RECOMMENDED_ALBUMS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case RECOMMENDED_ALBUMS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case RECOMMENDED_ALBUMS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case RECOMMENDED_ALBUMS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default recommendedAlbumsReducer;
