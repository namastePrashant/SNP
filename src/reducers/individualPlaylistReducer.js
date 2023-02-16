import {
    INDIVIDUAL_PLAYLIST_FETCH_REQUEST,
    INDIVIDUAL_PLAYLIST_FETCH_REQUEST_SUCCESS,
    INDIVIDUAL_PLAYLIST_FETCH_REQUEST_FAILURE,
    INDIVIDUAL_PLAYLIST_CLEAN_REQUEST, REMOVE_SONG_FROM_PLAYLIST_SUCCESS,
} from '../constants/actionTypes';
import {removeItemFromArry} from "../utils/commonUtils";

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const individualPlaylistReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case INDIVIDUAL_PLAYLIST_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case INDIVIDUAL_PLAYLIST_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case INDIVIDUAL_PLAYLIST_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case INDIVIDUAL_PLAYLIST_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });
        case REMOVE_SONG_FROM_PLAYLIST_SUCCESS:
            return {
                ...state,
                payload:removeItemFromArry(state?.payload?.songs,action.id)
            }

        default:
            return state;
    }
};

export default individualPlaylistReducer;