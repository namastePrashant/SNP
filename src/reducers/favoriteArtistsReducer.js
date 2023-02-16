import {
    FAVORITE_ARTISTS_FETCH_REQUEST,
    FAVORITE_ARTISTS_FETCH_REQUEST_SUCCESS,
    FAVORITE_ARTISTS_FETCH_REQUEST_FAILURE,
    FAVORITE_ARTISTS_FETCH_MORE_REQUEST,
    FAVORITE_ARTISTS_FETCH_MORE_REQUEST_SUCCESS,
    FAVORITE_ARTISTS_FETCH_MORE_REQUEST_FAILURE,
    FAVORITE_ARTISTS_FETCH_META,
    FAVORITE_ARTISTS_CLEAN_REQUEST,
    FAVOURITE_ARTIST_FOLLOW_REQUEST,
    FAVOURITE_ARTIST_FOLLOW_SUCCESS,
} from '../constants/actionTypes';

import { isEmpty } from '../utils/commonUtils';

const INITIAL_STATE = {
    payload: [],
    artist:[],
    recentlyFollowed: {},
    followLoading: false,
    loading: false,
    id: undefined,
    errors: {},
    loadingMore: false,
    meta: {},
    hasMore: false,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const favoriteArtistsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case FAVORITE_ARTISTS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case FAVORITE_ARTISTS_FETCH_MORE_REQUEST:
            return Object.assign({}, state, {
                loadingMore: true,
            });

        case FAVORITE_ARTISTS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                artist: action.data,
                loading: false,
                loadingMore: false,
                hasMore: !isEmpty(action.data) ? true : false,
                errors: {},
            });

            case FAVORITE_ARTISTS_FETCH_MORE_REQUEST_SUCCESS:
                return Object.assign({}, state, {
                   
                    artist: [...state.artist, ...action.data],
                    loading: false,
                    loadingMore: false,
                    hasMore:(action.data.length+state.artist.length)!==state.meta.total ? true : false,
                    errors: {},
                });
                
            

        case FAVORITE_ARTISTS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });
        case FAVORITE_ARTISTS_FETCH_MORE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loadingMore: false,
                errors: action.error,
            });
        case FAVORITE_ARTISTS_FETCH_META:
            return {
                ...state,
                meta: action.meta,
                loading: false,
                loadingMore: false,
                errors: {}
            }

        case FAVORITE_ARTISTS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });
        case FAVOURITE_ARTIST_FOLLOW_REQUEST:
            return {
                ...state,
                id: action.id,
                followLoading: true
            }

        case FAVOURITE_ARTIST_FOLLOW_SUCCESS:
            return {
                ...state,
                followLoading: false,
                recentlyFollowed: action.data
            }

        default:
            return state;
    }
};

export default favoriteArtistsReducer;