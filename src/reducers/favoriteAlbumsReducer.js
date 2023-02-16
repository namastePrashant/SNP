import {
    FAVORITE_ALBUMS_FETCH_REQUEST,
    FAVORITE_ALBUMS_FETCH_REQUEST_SUCCESS,
    FAVORITE_ALBUMS_FETCH_REQUEST_FAILURE,
    FAVORITE_ALBUMS_FETCH_MORE_REQUEST,
    FAVORITE_ALBUMS_FETCH_MORE_REQUEST_SUCCESS,
    FAVORITE_ALBUMS_FETCH_MORE_REQUEST_FAILURE,
    FAVORITE_ALBUMS_FETCH_META,
    FAVORITE_ALBUMS_CLEAN_REQUEST,
    FAVORITE_ALBUMS_SUCCESS,
    FAVORITE_ALBUMS_FETCH_ID_REQUEST
} from '../constants/actionTypes';

import { isEmpty } from '../utils/commonUtils';

const INITIAL_STATE = {
    payload: [],
    album:[],
    loading: false,
    favLoading: false,
    recentlyFav: {},
    id: undefined,
    errors: {},
    loadingMore: false,
    meta: {},
    hasMore: false,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const favoriteAlbumsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case FAVORITE_ALBUMS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case FAVORITE_ALBUMS_FETCH_MORE_REQUEST:
            return Object.assign({}, state, {
                loadingMore: true,
            });
        case FAVORITE_ALBUMS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                album: action.data,
                loading: false,
                loadingMore: false,
                hasMore: !isEmpty(action.data) ? true : false,
                errors: {},
            });
            
        
         case FAVORITE_ALBUMS_FETCH_MORE_REQUEST_SUCCESS:
             return Object.assign({}, state, {
                
                album:[...state.album, ...action.data],
                loading: false,
                loadingMore: false,
                hasMore:(action.data.length+state.album.length)!==state.meta.total ? true : false,
                errors: {},
            });
             

        case FAVORITE_ALBUMS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });
        case FAVORITE_ALBUMS_FETCH_MORE_REQUEST_FAILURE:
            return {
                ...state,
                loadingMore: false,
                errors: action.error,
            }
        case FAVORITE_ALBUMS_FETCH_META:
            return {
                ...state,
                meta: action.meta,
                loading: false,
                loadingMore: false,
                errors: {}
            }

        case FAVORITE_ALBUMS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });
        case FAVORITE_ALBUMS_FETCH_ID_REQUEST:
            return {
                ...state,
                id: action.id,
                favLoading: true,
            }
        case FAVORITE_ALBUMS_SUCCESS:
            return {
                ...state,
                recentlyFav: action.data,
                favLoading: false,
            }

        default:
            return state;
    }
};

export default favoriteAlbumsReducer;