import {
    RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST,
    RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST_SUCCESS,
    RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST_FAILURE,
    RELATED_ALBUMS_BY_ALBUM_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const relatedAlbumsByAlbumReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case RELATED_ALBUMS_BY_ALBUM_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default relatedAlbumsByAlbumReducer;