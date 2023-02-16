import {
    RECENTLY_PLAYED_ALL_FETCH_REQUEST,
    RECENTLY_PLAYED_ALL_FETCH_REQUEST_SUCCESS,    
    RECENTLY_PLAYED_ALL_FETCH_REQUEST_FAILURE,
    RECENTLY_PLAYED_ALL_CLEAN_REQUEST,
    RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST,
    RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST_SUCCESS,
    RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST_FAILURE,
    RECENTLY_PLAYED_ALL_FETCH_META_INFO,
} from '../constants/actionTypes';

import {isEmpty} from '../utils/commonUtils'

const INITIAL_STATE = {
    payload: [],
    loading: false,
    loadMoreLoading:false,
    errors: {},
    meta:{},
    hasMore:false,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const recentlyPlayedAllReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case RECENTLY_PLAYED_ALL_FETCH_REQUEST:            
            return Object.assign({}, state, {
                loading: true,
            });

        case RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST:            
            return {
                ...state,
                loadMoreLoading:true,
            }

        case RECENTLY_PLAYED_ALL_FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
                loadMoreLoading:false,
                errors: {},
                hasMore: !isEmpty(action.data)?true:false,
            };

        case RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST_SUCCESS:
            return {
                ...state,
                payload: [...state.payload, ...action.data],
                loading: false,
                loadMoreLoading:false,
                errors: {},
                hasMore: !isEmpty(action.data)?true:false,
            };

        case RECENTLY_PLAYED_ALL_FETCH_META_INFO:
            return {
                ...state,      
                meta:action.meta,          
                loading: false,
                loadMoreLoading:false,
                errors: {},
            };

        case RECENTLY_PLAYED_ALL_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                loadMoreLoading:false,
                errors: action.error,
            });

        case RECENTLY_PLAYED_ALL_FETCH_MORE_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                loadMoreLoading:false,
                errors: action.error,
            };

        case RECENTLY_PLAYED_ALL_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
                loadMoreLoading:false,
            });

        default:
            return state;
    }
};

export default recentlyPlayedAllReducer;
