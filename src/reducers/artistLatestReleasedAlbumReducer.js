import {
    ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST,
    ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST_SUCCESS,
    ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST_FAILURE,
    ARTIST_LATEST_RELEASED_ALBUM_CLEAN_REQUEST,
} from '../constants/actionTypes';


const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const artistLatestReleasedAlbumReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case ARTIST_LATEST_RELEASED_ALBUM_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case ARTIST_LATEST_RELEASED_ALBUM_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default artistLatestReleasedAlbumReducer;