import {
    FAVORITE_SONGS_ALL_FETCH_REQUEST,
    FAVORITE_SONGS_ALL_FETCH_REQUEST_SUCCESS,
    FAVORITE_SONGS_ALL_FETCH_REQUEST_FAILURE,
    FAVORITE_SONGS_ALL_CLEAN_REQUEST,
    FAVORITE_SONGS_ALL_FETCH_DETAIL_SUCCESS,
    FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST,
    FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST_SUCCESS,
    FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST_FAILURE,
    FAVORITE_SONGS_ALL_FETCH_META_INFO,
} from '../constants/actionTypes';
import {isEmpty} from '../utils/commonUtils'
const INITIAL_STATE = {
    payload: [],
    loading: false,
    loadMoreLoading:false,
    errors: {},
    total_duration:0,
    total_songs:0,
    meta:{},
    hasMore:false,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const favoriteSongsAllReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case FAVORITE_SONGS_ALL_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

            case FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST:
                return {...state,
                    loadMoreLoading: true,
                };

        case FAVORITE_SONGS_ALL_FETCH_REQUEST_SUCCESS:
            return {
                ...state,
                payload: action.data,
                loading: false,
                loadMoreLoading:false,
                errors: {},
                hasMore: !isEmpty(action.data)?true:false,
            };

            case FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST_SUCCESS:
                return {
                    ...state,
                    payload: [...state.payload, ...action.data],
                    loading: false,
                    loadMoreLoading:false,
                    errors: {},
                    hasMore: !isEmpty(action.data)?true:false,
                };

                case FAVORITE_SONGS_ALL_FETCH_META_INFO:
                    return {
                        ...state,      
                        meta:action.meta,          
                        loading: false,
                        loadMoreLoading:false,
                        errors: {},
                    };

        case FAVORITE_SONGS_ALL_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

            case FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST_FAILURE:
                return {
                    ...state,
                    loading: false,
                    loadMoreLoading:false,
                    errors: action.error,
                };

        case FAVORITE_SONGS_ALL_FETCH_DETAIL_SUCCESS:
            return {
                ...state,
                total_duration:action.total_duration,
                total_songs:action.total_songs
            }

        case FAVORITE_SONGS_ALL_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default favoriteSongsAllReducer;