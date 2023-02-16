import {
    ADD_TO_PLAYLIST_REQUEST,
    ADD_TO_PLAYLIST_REQUEST_SUCCESS,
    ADD_TO_PLAYLIST_REQUEST_FAILURE,    
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
    id:undefined,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const addToPlaylistReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case ADD_TO_PLAYLIST_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                id:action.id,
            });

        case ADD_TO_PLAYLIST_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case ADD_TO_PLAYLIST_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        default:
            return state;
    }
};

export default addToPlaylistReducer;
