import {
    RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST,
    RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST_SUCCESS,
    RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST_FAILURE,
    RELATED_ALBUMS_BY_ALBUM_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const relatedAlbumsByAlbumFetchRequest = () => {
    return {
        type: RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST,
    };
};

export const relatedAlbumsByAlbumFetchRequestSuccess = data => {

    return {
        type: RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const relatedAlbumsByAlbumFetchRequestFailure = error => {
    return {
        type: RELATED_ALBUMS_BY_ALBUM_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const relatedAlbumsByAlbumCleanRequest = () => {
    return {
        type: RELATED_ALBUMS_BY_ALBUM_CLEAN_REQUEST,
    };
};