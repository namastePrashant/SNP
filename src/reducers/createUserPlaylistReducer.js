import {
    CREATE_PLAYLIST_REQUEST,
    CREATE_PLAYLIST_REQUEST_SUCCESS,
    CREATE_PLAYLIST_REQUEST_FAILURE,    
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const createPlaylistReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case CREATE_PLAYLIST_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case CREATE_PLAYLIST_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case CREATE_PLAYLIST_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        default:
            return state;
    }
};

export default createPlaylistReducer;
