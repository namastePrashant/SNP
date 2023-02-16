import {
    EXPLORE_ALBUMS_FETCH_REQUEST,
    EXPLORE_ALBUMS_FETCH_REQUEST_SUCCESS,
    EXPLORE_ALBUMS_FETCH_REQUEST_FAILURE,
    EXPLORE_ALBUMS_FETCH_MORE_REQUEST,
    EXPLORE_ALBUMS_FETCH_MORE_REQUEST_SUCCESS,
    EXPLORE_ALBUMS_FETCH_MORE_REQUEST_FAILURE,
    EXPLORE_ALBUMS_FETCH_META,
    EXPLORE_ALBUMS_CLEAN_REQUEST,
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
const exploreAlbumsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case EXPLORE_ALBUMS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case EXPLORE_ALBUMS_FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
                loadingMore: false,
                hasMore: !isEmpty(action.data) ? true : false,
                errors: {},
            }

        case EXPLORE_ALBUMS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });
        case EXPLORE_ALBUMS_FETCH_MORE_REQUEST:
            return Object.assign({}, state, {
                loadingMore: true,
            });

        case EXPLORE_ALBUMS_FETCH_MORE_REQUEST_SUCCESS:
            return {
                ...state,
                payload: [...state.payload, ...action.data],
                loading: false,
                loadingMore: false,
                hasMore: !isEmpty(action.data) ? true : false,
                errors: {},
            }

        case EXPLORE_ALBUMS_FETCH_MORE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loadingMore: false,
                errors: action.error,
            });
        case EXPLORE_ALBUMS_FETCH_META:
            return Object.assign({}, state, {
                meta: action.meta,
                loading: false,
                loadingMore: false,
                errors: {},
            });

        case EXPLORE_ALBUMS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default exploreAlbumsReducer;