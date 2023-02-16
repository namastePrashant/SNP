import {
    INDIVIDUAL_MOOD_SONGS_FETCH_REQUEST,
    INDIVIDUAL_MOOD_SONGS_FETCH_REQUEST_SUCCESS,
    INDIVIDUAL_MOOD_SONGS_FETCH_REQUEST_FAILURE,
    INDIVIDUAL_MOOD_SONGS_FETCH_MORE_REQUEST,
    INDIVIDUAL_MOOD_SONGS_FETCH_MORE_REQUEST_SUCCESS,
    INDIVIDUAL_MOOD_SONGS_FETCH_MORE_REQUEST_FAILURE,
    INDIVIDUAL_MOOD_SONGS_CLEAN_REQUEST,
    INDIVIDUAL_MOOD_SONGS_FETCH_META_INFO,
} from '../constants/actionTypes';
import { isEmpty } from '../utils/commonUtils';

const INITIAL_STATE = {
    songs:[],
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
const individualMoodSongsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case INDIVIDUAL_MOOD_SONGS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });
        case INDIVIDUAL_MOOD_SONGS_FETCH_MORE_REQUEST:
            return Object.assign({}, state, {
                loadingMore: true,
            });

        case INDIVIDUAL_MOOD_SONGS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                songs:action.data.songs.data,
                loading: false,
                loadingMore: false,
                hasMore: !isEmpty(action.data.songs.data) ? true : false,
                errors: {},
            });
        case INDIVIDUAL_MOOD_SONGS_FETCH_MORE_REQUEST_SUCCESS:            

            return Object.assign({}, state, {
                // payload: [...state.payload,...action.data],
                songs:[...state.songs,...action.data.songs.data],
                loading: false,
                loadingMore: false,
                hasMore: ((action.data.songs.data.length + state.songs.length)!==state.meta.total) ? true : false,
                errors: {},
            });

        case INDIVIDUAL_MOOD_SONGS_FETCH_META_INFO:            
            return {
                ...state,      
                meta:{...action.meta},          
                loading: false,
                loadingMore:false,
                errors: {},
            };

        case INDIVIDUAL_MOOD_SONGS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                loadingMore: false,
                errors: action.error,
            });
        case INDIVIDUAL_MOOD_SONGS_FETCH_MORE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                loadingMore: false,
                errors: action.error,
            });

        case INDIVIDUAL_MOOD_SONGS_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default individualMoodSongsReducer;