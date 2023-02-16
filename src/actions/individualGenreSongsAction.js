import {
    INDIVIDUAL_GENRE_SONGS_FETCH_REQUEST,
    INDIVIDUAL_GENRE_SONGS_FETCH_REQUEST_SUCCESS,
    INDIVIDUAL_GENRE_SONGS_FETCH_REQUEST_FAILURE,
    INDIVIDUAL_GENRE_SONGS_FETCH_MORE_REQUEST,
    INDIVIDUAL_GENRE_SONGS_FETCH_MORE_REQUEST_SUCCESS,
    INDIVIDUAL_GENRE_SONGS_FETCH_MORE_REQUEST_FAILURE,
    INDIVIDUAL_GENRE_SONGS_CLEAN_REQUEST,
    INDIVIDUAL_GENRE_SONGS_FETCH_META_INFO,    
} from '../constants/actionTypes';

export const individualGenreSongsFetchRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_SONGS_FETCH_REQUEST,
    };
};

export const individualGenreSongsFetchMoreRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_SONGS_FETCH_MORE_REQUEST,
    };
};


export const individualGenreSongsFetchRequestSuccess = data => {

    return {
        type: INDIVIDUAL_GENRE_SONGS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const individualGenreSongsFetchMoreRequestSuccess = data => {

    return {
        type: INDIVIDUAL_GENRE_SONGS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const individualGenreSongsFetchMetaInfo = meta => {

    return {
        type: INDIVIDUAL_GENRE_SONGS_FETCH_META_INFO,
        meta,
    };
};

export const individualGenreSongsFetchRequestFailure = error => {
    return {
        type: INDIVIDUAL_GENRE_SONGS_FETCH_REQUEST_FAILURE,
        error,
    };
};


export const individualGenreSongsFetchMoreRequestFailure = error => {
    return {
        type: INDIVIDUAL_GENRE_SONGS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const individualGenreSongsCleanRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_SONGS_CLEAN_REQUEST,
    };
};