import {
    INDIVIDUAL_ALBUM_FETCH_REQUEST,
    INDIVIDUAL_ALBUM_FETCH_REQUEST_SUCCESS,
    INDIVIDUAL_ALBUM_FETCH_REQUEST_FAILURE,
    INDIVIDUAL_ALBUM_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const individualAlbumFetchRequest = () => {
    return {
        type: INDIVIDUAL_ALBUM_FETCH_REQUEST,
    };
};

export const individualAlbumFetchRequestSuccess = data => {

    return {
        type: INDIVIDUAL_ALBUM_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const individualAlbumFetchRequestFailure = error => {
    return {
        type: INDIVIDUAL_ALBUM_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const individualAlbumCleanRequest = () => {
    return {
        type: INDIVIDUAL_ALBUM_CLEAN_REQUEST,
    };
};