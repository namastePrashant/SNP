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

export const individualMoodSongsFetchRequest = () => {
    return {
        type: INDIVIDUAL_MOOD_SONGS_FETCH_REQUEST,
    };
};

export const individualMoodSongsFetchMoreRequest = () => {
    return {
        type: INDIVIDUAL_MOOD_SONGS_FETCH_MORE_REQUEST,
    };
};


export const individualMoodSongsFetchRequestSuccess = data => {
    
    return {
        type: INDIVIDUAL_MOOD_SONGS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const individualMoodSongsFetchMoreRequestSuccess = data => {
    return {
        type: INDIVIDUAL_MOOD_SONGS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const individualMoodSongsFetchMetaInfo = meta => {    
    return {
        type: INDIVIDUAL_MOOD_SONGS_FETCH_META_INFO,
        meta,
    };
};

export const individualMoodSongsFetchRequestFailure = error => {
    return {
        type: INDIVIDUAL_MOOD_SONGS_FETCH_REQUEST_FAILURE,
        error,
    };
};


export const individualMoodSongsFetchMoreRequestFailure = error => {
    return {
        type: INDIVIDUAL_MOOD_SONGS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const individualMoodSongsCleanRequest = () => {
    return {
        type: INDIVIDUAL_MOOD_SONGS_CLEAN_REQUEST,
    };
};