import {
    ARTIST_LATEST_RELEASES_FETCH_REQUEST,
    ARTIST_LATEST_RELEASES_FETCH_REQUEST_SUCCESS,
    ARTIST_LATEST_RELEASES_FETCH_REQUEST_FAILURE,
    ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST,
    ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST_SUCCESS,
    ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST_FAILURE,
    ARTIST_LATEST_RELEASES_FETCH_META,
    ARTIST_LATEST_RELEASES_CLEAN_REQUEST,
} from '../constants/actionTypes';

import { isEmpty } from '../utils/commonUtils';


const INITIAL_STATE = {
    albums:[],
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
const artistLatestReleasesReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case ARTIST_LATEST_RELEASES_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case ARTIST_LATEST_RELEASES_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                albums:action.data.albums.data,
                loading: false,
                loadingMore: false,
                hasMore: !isEmpty(action.data) ? true : false,
                errors: {},
            });

        case ARTIST_LATEST_RELEASES_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });
        case ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST:
            return Object.assign({}, state, {
                loadingMore: true,
            });

        case ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST_SUCCESS:

            return Object.assign({}, state, {
                // payload: {
                //     ...state.payload,
                //     albums:{
                //         data:[...state.payload.albums.data, ...action.data.albums.data],                    
                //     }
                // },                
                albums:[...state.albums, ...action.data],
                loading: false,
                loadingMore: false,
                // hasMore: state.albums.length!==state.meta.total ? true : false,
                hasMore: (state.albums.length + action.data.length)!==state.meta.total ? true : false,
                errors: {},
            });

        case ARTIST_LATEST_RELEASES_FETCH_MORE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loadingMore: false,
                errors: action.error,
            });

        case ARTIST_LATEST_RELEASES_FETCH_META:
            
            return {
                ...state,
                meta: { ...action.meta },
                loading: false,
                loadingMore: false,
                errors: {},
            };

        case ARTIST_LATEST_RELEASES_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default artistLatestReleasesReducer;