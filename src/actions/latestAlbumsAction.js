import {
    LATEST_ALBUMS_FETCH_REQUEST,
    LATEST_ALBUMS_FETCH_REQUEST_SUCCESS,
    LATEST_ALBUMS_FETCH_REQUEST_FAILURE,
    LATEST_ALBUMS_CLEAN_REQUEST,
} from '../constants/actionTypes';

export const latestAlbumsFetchRequest = () => {
    return {
        type: LATEST_ALBUMS_FETCH_REQUEST,
    };
};

export const latestAlbumsFetchRequestSuccess = data => {
    
    return {
        type: LATEST_ALBUMS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const latestAlbumsFetchRequestFailure = error => {
    return {
        type: LATEST_ALBUMS_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const latestAlbumsCleanRequest = () => {
    return {
        type: LATEST_ALBUMS_CLEAN_REQUEST,
    };
};