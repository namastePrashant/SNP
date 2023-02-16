import {
    INDIVIDUAL_GENRE_ARTISTS_FETCH_REQUEST,
    INDIVIDUAL_GENRE_ARTISTS_FETCH_REQUEST_SUCCESS,
    INDIVIDUAL_GENRE_ARTISTS_FETCH_REQUEST_FAILURE,
    INDIVIDUAL_GENRE_ARTISTS_FETCH_MORE_REQUEST,
    INDIVIDUAL_GENRE_ARTISTS_FETCH_MORE_REQUEST_SUCCESS,
    INDIVIDUAL_GENRE_ARTISTS_FETCH_MORE_REQUEST_FAILURE,
    INDIVIDUAL_GENRE_ARTISTS_FETCH_META_INFO,
    INDIVIDUAL_GENRE_ARTISTS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const individualGenreArtistsFetchRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_ARTISTS_FETCH_REQUEST,
    };
};

export const individualGenreArtistsFetchRequestSuccess = data => {

    return {
        type: INDIVIDUAL_GENRE_ARTISTS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const individualGenreArtistsFetchRequestFailure = error => {
    return {
        type: INDIVIDUAL_GENRE_ARTISTS_FETCH_REQUEST_FAILURE,
        error,
    };
};
export const individualGenreArtistsFetchMoreRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_ARTISTS_FETCH_MORE_REQUEST,
    };
};

export const individualGenreArtistsFetchMoreRequestSuccess = data => {

    return {
        type: INDIVIDUAL_GENRE_ARTISTS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const individualGenreArtistsFetchMoreRequestFailure = error => {
    return {
        type: INDIVIDUAL_GENRE_ARTISTS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};
export const individualGenreArtistsFetchMetaInfo = meta => {
    return {
        type: INDIVIDUAL_GENRE_ARTISTS_FETCH_META_INFO,
        meta,
    };
};

export const individualGenreArtistsCleanRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_ARTISTS_CLEAN_REQUEST,
    };
};