import {
    EXPLORE_SONGS_FETCH_REQUEST,
    EXPLORE_SONGS_FETCH_REQUEST_SUCCESS,
    EXPLORE_SONGS_FETCH_REQUEST_FAILURE,
    EXPLORE_SONGS_CLEAN_REQUEST,
    EXPLORE_SONGS_FETCH_MORE_REQUEST,
    EXPLORE_SONGS_FETCH_MORE_REQUEST_SUCCESS,
    EXPLORE_SONGS_FETCH_MORE_REQUEST_FAILURE,
    EXPLORE_SONGS_FETCH_META,
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
const exploreSongsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case EXPLORE_SONGS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case EXPLORE_SONGS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                loadingMore: false,
                hasMore: !isEmpty(action.data) ? true : false,
                errors: {},
            });

        case EXPLORE_SONGS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case EXPLORE_SONGS_FETCH_MORE_REQUEST:
            return Object.assign({}, state, {
                loadingMore: true,
            });

        case EXPLORE_SONGS_FETCH_MORE_REQUEST_SUCCESS:
            return {
                ...state,
                payload: [...state.payload, ...action.data],
                loading: false,
                loadingMore: false,
                hasMore: !isEmpty(action.data) ? true : false,
                errors: {},
            };

        case EXPLORE_SONGS_FETCH_MORE_REQUEST_FAILURE:
            return {
                ...state,
                loadingMore: false,
                errors: action.error,
            };
            
        case EXPLORE_SONGS_FETCH_META:
            return {
                ...state,
                meta: action.meta,
                loading: false,
                loadingMore: false,
                errors: {},
            };

        case EXPLORE_SONGS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default exploreSongsReducer;