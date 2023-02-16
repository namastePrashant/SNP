import {
    LATEST_SONGS_ALL_FETCH_REQUEST,
    LATEST_SONGS_ALL_FETCH_REQUEST_SUCCESS,
    LATEST_SONGS_ALL_FETCH_REQUEST_FAILURE,
    LATEST_SONGS_ALL_FETCH_MORE_REQUEST,
    LATEST_SONGS_ALL_FETCH_MORE_REQUEST_SUCCESS,
    LATEST_SONGS_ALL_FETCH_MORE_REQUEST_FAILURE,
    LATEST_SONGS_ALL_FETCH_META,
    LATEST_SONGS_ALL_CLEAN_REQUEST,
} from '../constants/actionTypes';

import { isEmpty } from '../utils/commonUtils';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    loadingMore: false,
    hasMore: false,
    errors: {},
    meta: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const latestSongsAllReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case LATEST_SONGS_ALL_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case LATEST_SONGS_ALL_FETCH_MORE_REQUEST:
            return Object.assign({}, state, {
                loadingMore: true,
            });

        case LATEST_SONGS_ALL_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                loadingMore: false,
                hasMore: !isEmpty(action.data) ? true : false,
                errors: {},
            });
        case LATEST_SONGS_ALL_FETCH_MORE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: [...state.payload, ...action.data],
                loading: false,
                loadingMore: false,
                hasMore: !isEmpty(action.data) ? true : false,
                errors: {},
            });

        case LATEST_SONGS_ALL_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });
        case LATEST_SONGS_ALL_FETCH_MORE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loadingMore: false,
                errors: action.error,
            });
        case LATEST_SONGS_ALL_FETCH_META:
            return {
                ...state,
                meta: action.meta,
                loading: false,
                loadingMore: false,
                errors: {},
            };

        case LATEST_SONGS_ALL_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default latestSongsAllReducer;