import {
    INDIVIDUAL_GENRE_ALBUMS_FETCH_REQUEST,
    INDIVIDUAL_GENRE_ALBUMS_FETCH_REQUEST_SUCCESS,
    INDIVIDUAL_GENRE_ALBUMS_FETCH_REQUEST_FAILURE,
    INDIVIDUAL_GENRE_ALBUMS_FETCH_MORE_REQUEST,
    INDIVIDUAL_GENRE_ALBUMS_FETCH_MORE_REQUEST_SUCCESS,
    INDIVIDUAL_GENRE_ALBUMS_FETCH_MORE_REQUEST_FAILURE,
    INDIVIDUAL_GENRE_ALBUMS_FETCH_META_INFO,
    INDIVIDUAL_GENRE_ALBUMS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const individualGenreAlbumsFetchRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_ALBUMS_FETCH_REQUEST,
    };
};

export const individualGenreAlbumsFetchMoreRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_ALBUMS_FETCH_MORE_REQUEST,
    };
};

export const individualGenreAlbumsFetchRequestSuccess = data => {

    return {
        type: INDIVIDUAL_GENRE_ALBUMS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const individualGenreAlbumsFetchMoreRequestSuccess = data => {

    return {
        type: INDIVIDUAL_GENRE_ALBUMS_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
};

export const individualGenreAlbumsFetchMetaInfo = meta => {

    return {
        type: INDIVIDUAL_GENRE_ALBUMS_FETCH_META_INFO,
        meta,
    };
};

export const individualGenreAlbumsFetchRequestFailure = error => {
    return {
        type: INDIVIDUAL_GENRE_ALBUMS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const individualGenreAlbumsFetchMoreRequestFailure = error => {
    return {
        type: INDIVIDUAL_GENRE_ALBUMS_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
};

export const individualGenreAlbumsCleanRequest = () => {
    return {
        type: INDIVIDUAL_GENRE_ALBUMS_CLEAN_REQUEST,
    };
};