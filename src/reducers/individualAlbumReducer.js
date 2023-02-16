import {
    INDIVIDUAL_ALBUM_FETCH_REQUEST,
    INDIVIDUAL_ALBUM_FETCH_REQUEST_SUCCESS,
    INDIVIDUAL_ALBUM_FETCH_REQUEST_FAILURE,
    INDIVIDUAL_ALBUM_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const individualAlbumReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case INDIVIDUAL_ALBUM_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case INDIVIDUAL_ALBUM_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case INDIVIDUAL_ALBUM_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case INDIVIDUAL_ALBUM_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default individualAlbumReducer;